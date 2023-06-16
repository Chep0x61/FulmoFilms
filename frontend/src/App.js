import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Films from "./Pages/Films";
import Commercials from "./Pages/Commercials";
import Projects from "./Pages/Projects";
import Musics from "./Pages/Musics";
import Photos from "./Pages/Photos";
import Services from "./Pages/Services";
import CV from "./Pages/CV";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Films />} />
        <Route path="/commercial" element={<Commercials />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/music" element={<Musics />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/service" element={<Services />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;