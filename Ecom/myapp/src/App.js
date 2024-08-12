
import './App.css';
import NavBar from './Componds/NavBar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Hero from './Hero/Hero.jsx';
import Men from './Men/Men.jsx';
import Women from './Women/Women.jsx';
import Shop from './Shop/Shop.jsx';
import Kids from './Kids/Kids.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Hero />} />
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
