import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./home"
import Project from './projects';
import { Link } from 'react-router-dom';
import  Skills from "./myskills";
import Qualification from "./qualification"
function App() {

  return (
    <div className='header' >
      <BrowserRouter>
      <nav class="button-div" id="nav">
          <Link to="/" class="link" >Home</Link>
          <Link to="/projects" class="link">Project</Link>
          <Link to="/skills" class="link">Myskills</Link>
          <Link to="/qualification" class="link">Qualification</Link>
      </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/qualification" element={<Qualification/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
