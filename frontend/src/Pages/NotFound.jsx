import Navbar from "../Components/Navbar";

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col gap-8 justify-center items-center text-xl lg:text-4xl mt-16">
                <h1>Nothing to see here</h1>
                <h2>Here is your 404 Error</h2>
            </div>
        </div>
    );
}

export default NotFound;