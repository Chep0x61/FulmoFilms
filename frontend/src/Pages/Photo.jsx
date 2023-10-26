import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ReactModal from "react-modal";
import { TailSpin } from "react-loader-spinner";

function getImageOrientation(imagePath) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      const orientation = img.width > img.height ? "landscape" : "portrait";
      resolve(orientation);
    };
  });
}

const categories = [
  { name: "Animals", path: "animals" },
  { name: "Architecture", path: "architecture" },
  { name: "Events", path: "events" },
  { name: "Landscapes", path: "landscapes" },
  { name: "Portraits", path: "portraits" },
  { name: "Others", path: "others" },
];

const maxImagesByCategory = {
  animals: 7,
  events: 7,
  architecture: 3,
  landscapes: 13,
  portraits: 7,
  others: 1,
};

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imagesWithOrientation, setImagesWithOrientation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const imagesPerPage = 6;

  const maxImagesCount = Object.values(maxImagesByCategory).reduce((acc, val) => acc + val, 0);

  const imageTitles = {
    animals: [],
    architecture: [],
    events: [],
    landscapes: [],
    portraits: [],
    others: [],
  };

  const loadImages = (categoryPath, quality) => {
    const images = [];
    const maxImagesInCategory = maxImagesByCategory[categoryPath];

    for (let i = 1; i <= maxImagesInCategory; i++) {
      let imagePath;
      if (quality === 'thumbnail') {
        imagePath = `/photography/thumbnails/${categoryPath}/ML_${i}.jpg`;
      } else if (quality === 'hq') {
        imagePath = `/photography/hq/${categoryPath}/ML_${i}.jpg`;
      }

      if (process.env.PUBLIC_URL + imagePath) {
        images.push({
          path: imagePath,
          title: imageTitles[categoryPath][i - 1],
          category: categoryPath,
        });
      }
    }

    return images;
  };

  const handleImageClick = (imagePath) => {
    if (window.innerWidth >= 1024) {
      setSelectedImage(imagePath);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  const loadMoreImages = () => {
    setLoading(true);

    const totalPages = Math.ceil(maxImagesCount / imagesPerPage);

    if (currentPage < totalPages) {
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMoreImages();
    }

    setScrollPosition(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const loadImagesWithOrientation = async () => {
      const thumbnailImages = selectedCategory === "All"
        ? categories.flatMap((category) => loadImages(category.path, 'thumbnail'))
        : loadImages(selectedCategory, 'thumbnail');

      const hqImages = selectedCategory === "All"
        ? categories.flatMap((category) => loadImages(category.path, 'hq'))
        : loadImages(selectedCategory, 'hq');

      const imagesWithOrientation = [];

      for (let i = 0; i < thumbnailImages.length; i++) {
        const thumbnailImage = thumbnailImages[i];
        const hqImage = hqImages[i];
        const orientation = await getImageOrientation(hqImage.path);

        imagesWithOrientation.push({ ...thumbnailImage, orientation, hqPath: hqImage.path });
      }

      setImagesWithOrientation(imagesWithOrientation);
      setLoading(false);
    };

    loadImagesWithOrientation();
  }, [selectedCategory]);

  const filteredImages = selectedCategory === "All"
    ? imagesWithOrientation
    : imagesWithOrientation.filter(image => image.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="flex justify-start md:justify-center align-center space-x-4 mb-8 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`${
              selectedCategory === "All" ? "bg-blue-500 text-white" : "bg-gray-700"
            } py-2 px-4 rounded-md`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.path)}
              className={`${
                selectedCategory === category.path ? "bg-blue-500 text-white" : "bg-gray-700"
              } py-2 px-4 rounded-md`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
          {filteredImages
            .slice(0, currentPage * imagesPerPage)
            .map((image, index) => (
              <div
                key={index}
                className={`group cursor-pointer flex justify-center ${
                  image.orientation === "portrait" ? "portrait-image row-span-2" : ""
                }`}
                onClick={() => handleImageClick(image.path)}
              >
                <img
                  src={image.path}
                  alt={image.title}
                  className="w-[400px] h-[200px] object-cover 2xl:group-hover:opacity-60 2xl:transition-all 2xl:duration-200 inset-0 h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-opacity-50 text-sm md:text-base text-white opacity-0">
                  <h2>{image.title}</h2>
                </div>
              </div>
            ))}
        </div>
        {loading ? (
          <div className="flex justify-center mt-4">
            <TailSpin
              height="80"
              width="80"
              ariaLabel="tail-spin-loading"
              radius="1"
              visible={true}
              color="#3c84f4"
            />
          </div>
        ) : null}
      </div>
      <Footer />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <img
            className={`${
              imagesWithOrientation.find((img) => img.path === selectedImage).orientation ===
              "portrait"
                ? "w-[50%]"
                : "w-[80%]"
            }`}
            src={imagesWithOrientation.find((img) => img.path === selectedImage).hqPath}
            alt="Modal"
          />
        )}
      </ReactModal>
    </div>
  );
};

export default Photos;
