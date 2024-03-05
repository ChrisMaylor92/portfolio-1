import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";


function App() {
  return (
    <div>
      <div id="header">
      
        <Navbar/>
        <Home/>
        
      </div>

      <Skills/>

      <div id="header2">
        <About/>
      </div>
      
      <Work/>
      <div id="header3">
        <Contact/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
