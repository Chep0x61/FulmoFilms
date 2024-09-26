import Navbar from "../Components/Navbar";
import SquareCard from "../Components/SquareCard";
import Footer from "../Components/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center text-center text-xl">
            <p className="mt-4 lg:mt-16 mb-8">You can contact me for any inquiries using the methods below : </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center text-center">
                    <SquareCard src="/icons/socials/mail.png" alt="mail" title="Professional email" text="fulmo.films@gmail.com" />
                    <SquareCard src="/icons/socials/mail.png" alt="mail" title="Personal email" text="lunot.creation@gmail.com" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;