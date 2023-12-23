import landscapesData from "../../Data/landscapesData";
import LazyImage from "../LazyImage";

const LandscapesGrid = () => {
    return (
        <>
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

        </>
    );
};

export default LandscapesGrid;
