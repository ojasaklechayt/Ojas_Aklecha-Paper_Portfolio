import Navbar from './components/Navbar/navbar'
import Sectionone from './components/SectionOne/sectionone';
import Sectiontwo from './components/SectionTwo/sectiontwo';
import "./App.css"
import Experience from './components/Experience/experience';
import Blogs from "./components/Blogs/blogs";
import Sectionthree from './components/SectionThree/sectionthree';

function App() {
  return (
    <div className="App">
      <div className="small-screen">
        Rotate the Screen for better experience.
      </div>
      <div className="major">
        <Navbar />
        <Sectionone />
        <div className="single-line" />
        <Sectiontwo />
        <div className="single-line" />
        <br />
        <Experience />
        <br />
        <div className="single-line" />
        <Blogs />
        <div className="single-line" />
        <br />
        <Sectionthree />
      </div>
    </div>
  );
}

export default App;