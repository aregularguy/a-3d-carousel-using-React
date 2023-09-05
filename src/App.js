import './App.css';
import Carousel from './Components/Carousel';
import Img from './Components/Img';
import p1 from "./assests/1.png"
import p2 from "./assests/2.png"
import p3 from "./assests/3.png"
import p4 from "./assests/4.png"
import Main from './Components/Main';
import Navbar from './NavBar/Navbar';
import Pages from './Components/Pages';
import SandBox from './Components/SandBox';
import './index.css'
// import Main from './Components/Main';
function App() {
  const images = [
    { src: p1, alt: 'Image 1' },
    { src: p2, alt: 'Image 2' },
    { src: p3, alt: 'Image 3' },
    { src: p4, alt: 'Image 4' },
  ];
  return (
    <>
   <Navbar/>
    <Main />
    <Pages />
      </>
  );
}

export default App;
