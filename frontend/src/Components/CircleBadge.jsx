const CircleBadge = ({ src, alt, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full overflow-hidden bg-[#171717] border-white border text-white p-2 hover:bg-[#282828]">
            <img src={src} alt={alt} className="w-6 h-6" />
        </a>
    );
};

export default CircleBadge;
