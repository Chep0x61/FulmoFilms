import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Film from "./Pages/Film";
import Commercial from "./Pages/Commercial";
import Project from "./Pages/Project";
import Music from "./Pages/Music";
import Photo from "./Pages/Photo";
import CV from "./Pages/CV";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/project" element={<Project />} />
        <Route path="/musicvideo" element={<Music />} />
        <Route path="/photography" element={<Photo />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;