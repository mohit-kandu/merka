import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import packageImg from "./assets/package.png"


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div className='box-with-text'>
          <p>PK194-ABI</p>
          <p>San Francisco</p>
          <div>
            <img src={packageImg} alt="packageBox" />
          </div>
        </div>
        <Hero />
      </main>
    </div>
  );
}

export default App;
