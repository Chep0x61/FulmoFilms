import React, { useState, useEffect } from 'react';

const VimeoCustomVideo = ({ title, link, autoplay, loop, muted, title_layout }) => {
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

    const videoSrc = `https://player.vimeo.com/video/${link}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&title=${title_layout ? 1 : 0}&muted=${muted ? 1 : 0}`;

    return (
        <div>
            <iframe
                title={title || "A Mathis Lunot's video"}
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

export default VimeoCustomVideo;
