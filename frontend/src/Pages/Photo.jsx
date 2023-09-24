import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ReactModal from "react-modal";

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

  const imageTitles = {
    animals: [],
    architecture: [],
    events: [],
    landscapes: [],
    portraits: [],
    others: [],
  };

  const loadImages = (categoryPath, maxImages) => {
    const images = [];

    for (let i = 1; i <= maxImages; i++) {
      const imagePath = `/photography/${categoryPath}/ML_${i}.jpg`;

      if (process.env.PUBLIC_URL + imagePath) {
        images.push({ path: imagePath, title: imageTitles[categoryPath][i - 1] });
      }
    }

    return images;
  };

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  const filteredImages =
    selectedCategory === "All"
      ? categories.flatMap((category) => loadImages(category.path, maxImagesByCategory[category.path]))
      : loadImages(selectedCategory, maxImagesByCategory[selectedCategory]);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="flex justify-center align-center space-x-4 mb-8">
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
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative cursor-pointer" onClick={() => handleImageClick(image.path)}>
              <img
                src={image.path}
                alt={image.title}
                className="w-[400px] h-[200px] object-cover group-hover:opacity-60 transition-all duration-200"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-opacity-50 text-sm md:text-base text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
                <h2>{image.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && <img className="w-[70%] h-auto" src={selectedImage} alt="Modal" />}
      </ReactModal>
    </div>
  );
};

export default Photos;
