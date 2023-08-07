import { Link } from 'react-router-dom';

const Logo = ({ mw, mh }) => {
  return (
    <Link to="/">
      <div className="flex lg:flex-col items-center">
        <img
          src="/images/swff.png"
          alt="FulmoFilms"
          className="w-16 h-16 lg:w-36 lg:h-36"
        />
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[1px] lg:pb-4 text-white">
          <p className="font-poppins text-base">Mathis Lunot</p>
          <p className="font-m_poppins text-base">Cinematographer</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
