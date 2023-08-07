const VideoDemo = () => {
    return (
        <div className="aspect-video lg:max-h-[31rem] max-w-[95%]">
            <video className="w-full h-full" autoPlay loop muted controls>
                <source src="/videos/demo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoDemo;

// 36rem taille video cool mais footer chelou