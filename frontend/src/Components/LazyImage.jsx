import React, { useState, useEffect } from "react";
import { Blurhash } from 'react-blurhash';
import ReactModal from "react-modal";

const LazyImage = ({ src, alt, orientation, blur, modal }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = src;
    }, [src, orientation]);

    const openModal = () => {
        const is2xlScreen = window.innerWidth >= 1536;

        if (is2xlScreen) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {imageLoaded ? (
                <>
                    <div
                        className={`relative ${orientation === 'portrait' ? 'row-span-2' : ''} 2xl:inline-block`}
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="w-full 2xl:w-[400px] 2xl:hover:opacity-60 2xl:hover:cursor-pointer 2xl:transition-all 2xl:duration-200 inset-0 h-full object-cover object-center mx-auto"
                            onClick={() => modal && openModal()}
                        />
                        <ReactModal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Image Modal"
                            className="modal"
                            overlayClassName="overlay"
                        >
                            <img
                                src={src}
                                alt={alt}
                                style={{ width: orientation === 'portrait' ? '50%' : '80%', height: 'auto' }}
                            />
                        </ReactModal>
                    </div>
                </>
            ) : (
                <div
                    className={`relative ${orientation === 'portrait' ? 'row-span-2' : ''} 2xl:inline-block`}
                >
                    <Blurhash
                        hash={blur}
                        width={window.innerWidth >= 768 ? 400 : 311}
                        height={orientation === 'portrait' ? 600 : 266} // 311w 207h
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                </div>
            )}
        </>
    );
}

export default LazyImage;
