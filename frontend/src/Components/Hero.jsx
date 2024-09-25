import VimeoCustomVideo from "./VimeoCustomVideo";

const Hero = () => {
    return (
        <div className="mt-16 flex justify-center items-center lg:m-0">
            <VimeoCustomVideo
                title="Mathis Lunot's showreel"
                link="1012723147"
                autoplay={true}
                loop={true}
                muted={true}
                title_layout={false}
            />
        </div>
    );
}

export default Hero;