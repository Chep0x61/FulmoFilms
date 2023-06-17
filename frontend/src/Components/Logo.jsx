const Logo = ({ mw, mh }) => {
  return (
    <div className={`flex lg:flex-col items-center`}>
      <img src="/images/sbff.png" alt="FulmoFilms" className="w-16 h-16" />
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[1px] lg:pb-4">
        <p className="font-poppins text-base">Mathis Lunot</p>
        <p className="font-m_poppins text-base">Cinematographer</p>
      </div>
    </div>
  );
}

export default Logo;
