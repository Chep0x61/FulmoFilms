import eventsData from "../../Data/eventsData";
import LazyImage from "../LazyImage";

const EventsGrid = () => {
    return (
        <>
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

        </>
    );
};

export default EventsGrid;