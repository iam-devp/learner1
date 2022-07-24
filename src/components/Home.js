
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Newsletter from './Newsletter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Test.js';
import Test2 from './Test2.js';

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
    </div>
  );
}

export default App;
