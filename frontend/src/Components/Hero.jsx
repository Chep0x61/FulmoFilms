import YoutubeCustomVideo from "./YoutubeCustomVideo";

const Hero = () => {
    return (
        <div className="mt-16 flex justify-center items-center lg:m-0">
            <YoutubeCustomVideo
                title="Mathis Lunot's showreel"
                videoId="7XWS4yVYFZE"
                autoplay={true}
                loop={true}
                muted={true}
                title_layout={false}
            />
        </div>
    );
}

export default Hero;