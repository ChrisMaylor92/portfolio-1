import { About } from "./components/About";
import { Contact } from "./components/Contact";

import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import carouselData from "./carouselData.json";

function App() {
  console.log(carouselData)
  return (
    <div>
      <div id="header" className="hidden lg:flex ">
      
        <Navbar/>
        <Home/>
        
      </div>
      <div id="headerMobile" className="flex lg:hidden h-screen ">
      
        <Navbar/>
        <Home/>
        
      </div>

      <Skills/>

      <div id="header2" className="hidden lg:flex">
        <About/>
      </div>
      <div id="header2Mobile" className="flex lg:hidden h-screen">
        <About/>
      </div>
      
      <Work data={carouselData.slides}/>
      <div id="header3" className="hidden lg:flex">
        <Contact/>
        
      </div>
      <div id="header3Mobile" className="flex lg:hidden">
        <Contact/>
        
      </div>
      
    
    </div>
  );
}

export default App;
