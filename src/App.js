
import './App.css';
import'./index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import About from './components/About';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import ABlog from './components/ABlog';
import Contact from './components/Contact';

function App() {
  return (
    <div >
       <Router>


   <Navbar />

   <Routes>
   <Route exact path = "/" element = {<HomePage />} />
  <Route exact path= "/about" element = {<About />} />
  <Route exact path= "/classes" element = {<Classes />} />
  <Route exact path= "/gallery" element = {<Gallery />} />
  <Route exact path= "/schedule" element = {<Schedule />} />
   <Route exact path= "/blog" element={<ABlog/>} />
   <Route exact path= "/contact" element={<Contact />} />
    </Routes>
     </Router>


    </div>
 
  );
}

export default App;
