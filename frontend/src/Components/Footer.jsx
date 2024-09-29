import CircleBadge from "./CircleBadge";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col justify-center items-center pt-8">
            <div className="flex gap-x-1">
                <CircleBadge src="/icons/socials/mail.png" alt="FulmoFilmsMail" href="mailto:lunot.creation@gmail.com"/>
                <CircleBadge src="/icons/socials/instagram.png" alt="InstagramMathisLunot" href="https://www.instagram.com/mathislunot/"/>
                <CircleBadge src="/icons/socials/youtube.png" alt="YoutubeMathisLunot" href="https://www.youtube.com/@FULMOFILMS"/>
                <CircleBadge src="/icons/socials/vimeo.png" alt="VimeoLunot" href="https://vimeo.com/lunot" />
                <CircleBadge src="/icons/socials/linkedin.png" alt="LinkedInMathisLunot" href="https://www.linkedin.com/in/mathis-lunot/"/>
            </div>
            <a className="my-4 text-sm md:text-md lg:text-base hover:text-[#BDBDBD]" href="https://github.com/Chep0x61" target="_blank" rel="noreferrer">
                <p>© FulmoFilms {currentYear} - Made with ❤️ by Chep0x61 !</p>
            </a>
        </div>
    );
}

export default Footer;
