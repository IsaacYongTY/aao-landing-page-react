

import './assets/css/App.scss';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar'

import TeaserSection from './components/TeaserSection'
import AboutSection from './components/AboutSection'
import PerformersSection from './components/PerformersSection'
import PrizesSection from './components/PrizesSection'
import WallSection from './components/WallSection'

import Footer from './components/Footer'

import RSVPButton from './components/RSVPButton';

function App() {

  

  return (
    <div className="App">

      <div className="nav-wrapper">

        <NavBar />

      </div> 
    
      <div className="app-logo-container" />
    
      <SideBar />
      
    
      <div className="banner" />

          
      <RSVPButton name="Click Here to Our FB Events Page and Press Going!" url="https://www.facebook.com/events/402233797817511"/>
      <TeaserSection />
      <AboutSection />
      <PerformersSection />
      <RSVPButton name="Join Us for the FREE Live Concert!" url="https://www.facebook.com/events/402233797817511" />
      <PrizesSection />
      <RSVPButton name="Join the Giveaway" url="https://www.facebook.com/107652481146435/posts/138543804723969/?d=n"/>
      <WallSection />


      <Footer />

      <div className="sidebar-screen hidden" />

  </div>

    
  );
}

export default App;
