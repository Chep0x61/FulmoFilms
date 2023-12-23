import othersData from "../../Data/othersData";
import LazyImage from "../LazyImage";

const OthersGrid = () => {
    return (
        <>
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
    );
};

export default OthersGrid;