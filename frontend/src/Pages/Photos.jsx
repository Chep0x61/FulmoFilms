import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ReactModal from "react-modal";
import { TailSpin } from "react-loader-spinner";

const categories = [
  { name: "All", path:""},
  { name: "Animals", path: "animals" },
  { name: "Architecture", path: "architecture" },
  { name: "Events", path: "events" },
  { name: "Landscapes", path: "landscapes" },
  { name: "Portraits", path: "portraits" },
  { name: "Others", path: "others" }
];

const maxImagesByCategory = {
  all: 38,
  animals: 7,
  events: 7,
  architecture: 3,
  landscapes: 13,
  portraits: 7,
  others: 1
};

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

const Photos = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("animals");
  const [indexPage, setIndexPage] = useState(1)
  const [imagesLeft, setImagesLeft] = useState(7)
  const imagesPerPage = 6;

  const LoadImages = (quality) => {
    if ((indexPage * imagesPerPage) >= maxImagesByCategory.all)
      return;
    setIsLoading(true);

    const loadedImages = [];

      for (let i = 1; i != ((imagesPerPage * indexPage) + 1); i++) {
        if (imagesLeft > 0) {
          setImagesLeft(imagesLeft - 1);
          console.log(imagesLeft);
        } else {
          return;
        }
        let imagePath;
        if (quality === 'thumbnails') {
          imagePath = `/photography/thumbnails/${selectedCategory}/ML_${i}.jpg`;
        } else if (quality === 'hq') {
          imagePath = `/photography/hq/${selectedCategory}/ML_${i}.jpg`;
        }
        const orientation = getImageOrientation(imagePath);
        loadedImages.push({ path: imagePath, orientation });
      }
    setImages(loadedImages.slice(0, imagesPerPage * indexPage));
    setIsLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setIndexPage(indexPage + 1);
      LoadImages("thumbnails")
    }
  };

  const switchCategory = (categoryPath) => {
    setSelectedCategory(categoryPath);
    const nbr = maxImagesByCategory[categoryPath]
    setImagesLeft(nbr)
  }

  useEffect(() => {
    LoadImages('thumbnails');

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedCategory, indexPage]);


  useEffect(() => {
    const categoryPath = selectedCategory;
    LoadImages('thumbnails');
    const nbr = maxImagesByCategory[categoryPath] - 6;
    setImagesLeft(nbr);
  }, [selectedCategory]);

  return (
      <div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto p-8">
          <div className="flex justify-start md:justify-center align-center space-x-4 mb-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => switchCategory(category.path)}
                className={`${
                  selectedCategory === category.path ? "bg-blue-500 text-white" : "bg-gray-700"
                } py-2 px-4 rounded-md`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
          {images.map((image) => (
                <img
                  className="w-full h-auto object-cover 2xl:group-hover:opacity-60 2xl:transition-all 2xl:duration-200"
                  src={image.path}
                  alt={"Mathis Lunot's Picture"}
                />
            ))}
          </div>
          {isLoading ? (
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
      </div>
  )
}

export default Photos;
