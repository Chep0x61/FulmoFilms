import React, { useState, useEffect } from 'react';

const YoutubeCustomVideo = ({ title, videoId, autoplay, loop, muted, title_layout, quality = "hd720" }) => {
    const [videoWidth, setVideoWidth] = useState(992);

    useEffect(() => {
        const updateVideoDimensions = () => {
            if (window.innerWidth >= 992) {
                setVideoWidth(992);
            } else {
                setVideoWidth(window.innerWidth);
            }
        };

        updateVideoDimensions();
        window.addEventListener('resize', updateVideoDimensions);

        return () => {
            window.removeEventListener('resize', updateVideoDimensions);
        };
    }, []);

    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&mute=${muted ? 1 : 0}&showinfo=${title_layout ? 1 : 0}&playlist=${videoId}&vq=${quality}`;

    return (
        <div>
            <iframe
                title={title || "A Mathis Lunot's YouTube video"}
                src={videoSrc}
                style={{ zIndex: 1 }}
                width={videoWidth}
                height={Math.floor((videoWidth * 558) / 992)}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YoutubeCustomVideo;
