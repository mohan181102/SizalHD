import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import SizalHD from "./Components/SizalHD";
import Technology from "./Components/Technology";
import ContactUS from "./Components/ContactUS";
import LensGallery from "./Components/LensGallery";
import BlueBlock from "./Components/BlueBlock";
import Bifocal from "./Components/Bifocal";
import DigitalProgressive from "./Components/DigitalProgressive";
import FreeFormProgressive from "./Components/FreeFormProgressive";
import SingleVision from "./Components/SingleVision";
import SteelCoat from "./Components/SteelCoat";
import HardCoat from "./Components/HardCoat";
import AntiReflective from "./Components/AntiReflective";
import ScratchResistant from "./Components/ScratchResistant";
import PhotoChromic from "./Components/PhotoChromic";
import Scrollprogress from "./Components/Scrollprogress";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/sizalhd" Component={SizalHD} />
        <Route path="/contact-us" Component={ContactUS} />
        <Route path="/lenses" Component={LensGallery} />
        <Route path="/blue-block" Component={BlueBlock} />
        <Route path="/bifocal" Component={Bifocal} />
        <Route path="/digital-progressive" Component={DigitalProgressive} />
        <Route path="/freeform-progressive" Component={FreeFormProgressive} />
        <Route path="/single-vision" Component={SingleVision} />
        <Route path="/steel-coat" Component={SteelCoat} />
        <Route path="/hard-coat" Component={HardCoat} />
        <Route path="/anti-reflective" Component={AntiReflective} />
        <Route path="/scratch-resistant" Component={ScratchResistant} />
        <Route path="/photo-chromatic" Component={PhotoChromic} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
