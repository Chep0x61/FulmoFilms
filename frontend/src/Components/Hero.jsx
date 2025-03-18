import YoutubeCustomVideo from "./YoutubeCustomVideo";

const Hero = () => {
    return (
        <div className="mt-16 flex justify-center items-center lg:m-0">
            <YoutubeCustomVideo
                title="Mathis Lunot's showreel"
                videoId="Q5Wf14jf2zA&t"
                autoplay={true}
                loop={true}
                muted={true}
                title_layout={false}
                quality="hd1080"
            />
        </div>
    );
}

export default Hero;