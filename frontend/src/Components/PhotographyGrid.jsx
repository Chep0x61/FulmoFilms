import { useState } from "react";
import animalsData from "../Data/animalsData";
import architectureData from "../Data/architectureData";
import eventsData from "../Data/eventsData";
import landscapesData from "../Data/landscapesData";
import othersData from "../Data/othersData";
import portraitsData from "../Data/portraitsData";

import AnimalsGrid from "./Photography/AnimalsGrid";
import ArchitectureGrid from "./Photography/ArchitectureGrid";
import EventsGrid from "./Photography/EventsGrid";
import LandscapesGrid from "./Photography/Landscapes";
import PortraitsGrid from "./Photography/Portraits";
import OthersGrid from "./Photography/OthersGrid";

import LazyImage from "./LazyImage";

const categories = [
    { name: "Animals", path: "animals" },
    { name: "Architecture", path: "architecture" },
    { name: "Events", path: "events" },
    { name: "Landscapes", path: "landscapes" },
    { name: "Portraits", path: "portraits" },
    { name: "Others", path: "others" },
];

const PhotographyGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
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
                        onClick={() => setSelectedCategory(category.name)}
                        className={`${
                            selectedCategory === category.name ? "bg-blue-500 text-white" : "bg-gray-700"
                        } py-2 px-4 rounded-md`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
                {selectedCategory === "All" ? (
                    <>
                        {animalsData.map((photo) => (
                            <LazyImage
                                key={photo.id}
                                src={`/photography/thumbnails/${photo.category}/ML_${photo.id}.jpg`}
                                alt={photo.alt}
                                orientation={photo.orientation}
                                blur={photo.blurhash}
                                modal={true}
                            />
                        ))}
                        {architectureData.map((photo) => (
                            <LazyImage
                                key={photo.id}
                                src={`/photography/thumbnails/${photo.category}/ML_${photo.id}.jpg`}
                                alt={photo.alt}
                                orientation={photo.orientation}
                                blur={photo.blurhash}
                                modal={true}
                            />
                        ))}
                        {eventsData.map((photo) => (
                            <LazyImage
                                key={photo.id}
                                src={`/photography/thumbnails/${photo.category}/ML_${photo.id}.jpg`}
                                alt={photo.alt}
                                orientation={photo.orientation}
                                blur={photo.blurhash}
                                modal={true}
                            />
                        ))}
                        {landscapesData.map((photo) => (
                            <LazyImage
                                key={photo.id}
                                src={`/photography/thumbnails/${photo.category}/ML_${photo.id}.jpg`}
                                alt={photo.alt}
                                orientation={photo.orientation}
                                blur={photo.blurhash}
                                modal={true}
                            />
                        ))}
                        {portraitsData.map((photo) => (
                            <LazyImage
                                key={photo.id}
                                src={`/photography/thumbnails/${photo.category}/ML_${photo.id}.jpg`}
                                alt={photo.alt}
                                orientation={photo.orientation}
                                blur={photo.blurhash}
                                modal={true}
                            />
                        ))}
                        {othersData.map((photo) => (
                            <LazyImage
                                key={photo.id}
                                src={`/photography/thumbnails/${photo.category}/ML_${photo.id}.jpg`}
                                alt={photo.alt}
                                orientation={photo.orientation}
                                blur={photo.blurhash}
                                modal={true}
                            />
                        ))}
                    </>
                ) : selectedCategory === "Animals" ? (
                    <AnimalsGrid />
                ) : selectedCategory === "Architecture" ? (
                    <ArchitectureGrid />
                ) : selectedCategory === "Events" ? (
                    <EventsGrid />
                ) : selectedCategory === "Landscapes" ? (
                    <LandscapesGrid />
                ) : selectedCategory === "Portraits" ? (
                    <PortraitsGrid />
                ) : selectedCategory === "Others" ? (
                    <OthersGrid />
                ) : (
                    <>
                        {"No content selected for " + selectedCategory}
                    </>
                )}
            </div>
        </div>
    );
};

export default PhotographyGrid;
