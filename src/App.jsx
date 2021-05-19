import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen = {menuOpen} setMenu = {setMenuOpen} />
      <Menu menuOpen = {menuOpen} setMenu = {setMenuOpen}/>
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
