import React, { useState, useEffect } from 'react';

const VideoDemo = () => {
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

    return (
        <div>
            <iframe
                src="https://player.vimeo.com/video/838293783?h=9689c7ee88&autoplay=1&loop=1&title=0"
                style={{ zIndex: 1 }}
                width={videoWidth}
                height={Math.floor((videoWidth * 558) / 992)}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoDemo;
