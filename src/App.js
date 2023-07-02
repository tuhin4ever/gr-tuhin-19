
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Design from './components/Design';



const App = () => {
  return (
    <div className='bg-black bg-no-repeat bg-cover overflow-hidden'>
     <Design></Design>
      <Header />
      <SocialLinks />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
