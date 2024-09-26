import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CV = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-screen items-center">
        <div className="bg-[#272727] mt-8 p-8 rounded-lg shadow-lg shadow-[#00b4d8]/50 max-w-[95%]">
            <p className="font-bold text-3xl">Mathis Lunot</p>
            <p>Né à Clermont-Ferrand le 23 mai 2001</p>
          <h2 className="mt-4 text-xl lg:text-3xl font-bold">Filmographie :</h2>
          <ul className="list-disc ml-8 text-base lg:text-lg">
            <li>2023</li>
            <ul className="list-disc ml-8">
              <li>Réalisateur & Dir de la photographie : Publicité- AFPA</li>
              <li>Lumière et Cadre : Publicité- Hermès Paris</li>
            </ul>
            <li>2022</li>
            <ul className="list-disc ml-8 text-base lg:text-lg">
              <li>Réalisateur & Dir de la photographie : court métrage- Allez Vous Faire</li>
              <li>1st AC : Clip- The Big Kaboom- Beau Bandit</li>
              <li>1st AC : Clip- Braise- Lotti</li>
              <li>1st AC : Clip- If Only You Were Mine- Argentique</li>
              <li>Dir de la Photographie : Court Métrage- Tourner La Page</li>
            </ul>
            <li>2021</li>
            <ul className="list-disc ml-8 text-base lg:text-lg">
              <li>Dir de la Photographie : Court Métrage- Jackpot</li>
              <li>Dir de la Photographie : Publicité- Boesner</li>
              <li>Réalisateur : A la manière de… Euphoria</li>
            </ul>
          </ul>
          <h2 className="mt-4 text-xl lg:text-3xl font-bold">Prix :</h2>
          <ul className="list-disc ml-8 text-base lg:text-lg">
            <li>Dir de la Photographie : Court Métrage- Tourner La Page <br/> Kino Film Festival : Prix du Jury et du Public</li>
          </ul>
          <h2 className="mt-4 text-xl lg:text-3xl font-bold">Formation :</h2>
          <ul className="list-disc ml-8 text-base lg:text-lg">
            <li>2019-2022 : CinéCréatis : Réalisateur Concepteur Audiovisuel, RNCP de niveau VI</li>
            <li>2022 : Stage d’un mois PANAVISION</li>
            <li>2021 : Stage d’un mois Riot House Production</li>
            <li>2019 : Bac S</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CV;
