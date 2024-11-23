import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import VimeoCustomVideo from "../Components/VimeoCustomVideo";
import YoutubeCustomVideo from "../Components/YoutubeCustomVideo";


const Commercials = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-16 flex flex-col justify-center items-center lg:m-0">
                <YoutubeCustomVideo
                    title="THE BEAUTY OF TIME- Fake ZENITH Commercial"
                    videoId="kktcF5dUcXA"
                    autoplay={false}
                    loop={false}
                    muted={false}
                    title_layout={false}
                    quality="hd1080"
                />
                <VimeoCustomVideo
                    title="AFPA - Mathis Lunot"
                    link="836153003"
                    autoplay={false}
                    loop={false}
                    muted={false}
                />
                <VimeoCustomVideo
                    title="Le Marquis"
                    link="877928903"
                    autoplay={false}
                    loop={false}
                    muted={false}
                />

            </div>
            <Footer />
        </div>
    );
}

export default Commercials;