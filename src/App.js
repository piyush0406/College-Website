import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/Dropdown";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import { SliderData } from './data/SliderData'
import GlobalStyle from "./globalStyles";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import SubHero from "./components/SubHero/SubHero";
import Upcoming from "./components/Upcoming/Upcoming"
import Social from "./components/Social/Social";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown  isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData}/>
        <SubHero />
        <ExperienceSection />
        <InfoSection />
        <Social />
        <Upcoming />
        <Backdrop />
        <Footer />
      </>
    </div>
  );
}

export default App;
