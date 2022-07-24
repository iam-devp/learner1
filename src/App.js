
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function App() {
  return (
    <Router>
<Routes>

<Route path="/" element={<Home/>}/>

<Route path="about" element={<About/>}/>

</Routes>





</Router>

  );
}

export default App;
