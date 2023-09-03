import './App.css';
import Carousel from './Components/Carousel';
import Img from './Components/Img';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
// import Main from './Components/Main';
function App() {
  return (
    <>
    <NavBar/>
    <Main />
    {/* <Img/> */}
    <Carousel />
    </>
  );
}

export default App;
