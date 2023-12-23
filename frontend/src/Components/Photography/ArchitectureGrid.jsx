import architectureData from "../../Data/architectureData";
import LazyImage from "../LazyImage";

const ArchitectureGrid = () => {
    return (
        <>
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

        </>
    );
};

export default ArchitectureGrid;