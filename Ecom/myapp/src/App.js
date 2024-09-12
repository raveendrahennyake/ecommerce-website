
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Men from './pages/Men/Men.jsx';
import Women from './pages/Women/Women.jsx';
import Kids from './pages/Kids/Kids.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Shoeps from './MainPage/Shoeps.jsx';
import NavBar from './Componds/NavBar/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
      <Routes>
          
          <Route path="/" element={<Shoeps/> }/>
          <Route path='/Men' element={<Men/>}/>
           <Route path='/Women' element={<Women/>}/>
            <Route path='/Shop' element={<Shop/>}/>
             <Route path='/Kids' element={<Kids/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
