import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import VimeoCustomVideo from "../Components/VimeoCustomVideo";

const Commercials = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-16 flex justify-center items-center lg:m-0">
            <VimeoCustomVideo
                title="AFPA - Mathis Lunot"
                link="836153003"
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