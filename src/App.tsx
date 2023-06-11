import Navbar from './components/Navbar/navbar'
import Sectionone from './components/SectionOne/sectionone';
import Sectiontwo from './components/SectionTwo/sectiontwo';
import "./App.css"

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
      </div>
    </div>
  );
}

export default App;