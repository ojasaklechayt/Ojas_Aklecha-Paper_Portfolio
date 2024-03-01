import Navbar from './components/Navbar/navbar'
import Sectionone from './components/SectionOne/sectionone';
import Sectiontwo from './components/SectionTwo/sectiontwo';
import "./App.css"
import Experience from './components/Experience/experience';
import Blogs from "./components/Blogs/blogs";
import Sectionthree from './components/SectionThree/sectionthree';
import Projects from './components/Projects/projects';
import Connect from './components/Connect/connect';
import './style/tailwind.css';
import Linkedin from './components/LatestLinkedin/linkedin';

function App() {
  return (
    <div className="App">
      <div className="major">
        <Navbar />
        <Sectionone />
        <div className="single-line" />
        <Sectiontwo />
        <div className="single-line" />
        <br />
        <Experience />
        <br />
        <br />
        <div className="single-line" />
        <Blogs />
        <div className="single-line" />
        <br />
        <Sectionthree />
        <div className="single-line" />
        <br />
        <Projects />
        <div className="single-line" />
        <br />
        <Connect />
        <br />
      </div>
    </div>
  );
}

export default App;