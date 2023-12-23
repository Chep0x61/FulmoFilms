import animalsData from "../../Data/animalsData";
import LazyImage from "../LazyImage";

const AnimalsGrid = () => {
    return (
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

                    </>
    );
};

export default AnimalsGrid;
