import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import { Carousel } from 'bootstrap';
import MyCarousel from './components/MyCarousel';
import ImageGrid from './components/ImageGrid';
import Section1 from './components/Section1';
import About from './components/About';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
   <>
   {/* <Navbar/> */}
   <Navbar1/>
   <MyCarousel/>
   <ImageGrid/>
   
   <About/>
   <Section1/>
   <Section2/>
   <Section3/>

   </>
     
 
  );
}

export default App;
