
import Navbar from './Navbar';
  import './App.css';
  import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
  import Contact  from './Components/Contact';
import Students from './Components/Students'
function App() {




  return (
  
    <div className="App">
        <Navbar />
       <div className='container2'>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Students' element={<Students />} />
          <Route path='/Contact' element={<Contact />} />
         
        </Routes>



       </div>
         
         
    </div>
  );
}

export default App;
