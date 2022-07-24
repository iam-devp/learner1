

import Navbar from './components//Navbar';
import Slideshow from './components/Slideshow';
import Newsletter from './components/Newsletter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/Test.js';
import Test2 from './components/Test2.js';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slideshow/>
      <br></br>
      <h1 style={{marginLeft:'460px'}}>This Month's Reviews</h1><br></br>
      <Test/>
      <br></br>
      <h1 style={{marginLeft:'430px'}}>Previous Month's Reviews</h1><br></br>
      <Test2/>
      <br></br>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <h1 style={{marginLeft:'520px'}}>NEWSLETTER</h1><br></br>
      
      <Newsletter/>
      
      <About/>
    </div>
  );
}

export default App;
