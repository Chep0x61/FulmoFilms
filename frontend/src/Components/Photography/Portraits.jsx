import portraitsData from "../../Data/portraitsData";
import LazyImage from "../LazyImage";

const PortraitsGrid = () => {
    return (
        <>
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

        </>
    );
};

export default PortraitsGrid;