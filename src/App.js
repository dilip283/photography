// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './About';
import './App.css';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import './my-sass.scss';
import Navbar from './Navbar';
import Gallery from "./portfolio/Gallery";


function App() {
  return (
    <div className="App">
      <Navbar />   
      <Carousel />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
