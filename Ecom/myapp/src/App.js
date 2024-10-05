
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shoeps from './MainPage/Shoeps.jsx';
import NavBar from './Componds/NavBar/NavBar.jsx';
import ShopCatories from './Componds/ShopCatories/ShopCatories.jsx';
import bannerkids from '../../myapp/src/Assets/banner_kids.png'
import bannermens from '../src/Assets/banner_mens.png';
import bannerwomen from '../src/Assets/banner_women.png'
import Login from '../../myapp/src/pages/Login/Login.jsx'
import Shop from './pages/Shop/Shop.jsx';
import Footer from '../../myapp/src/Componds/Footer/footer.jsx'
import Product from './ProductDetails/Product.jsx';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
       <NavBar/>
      <Routes>
          <Route path="/" element={<Shoeps/> }/>
          <Route path='/men' element={<ShopCatories category="men" banner={bannermens}  />}/>
           <Route path='/women' element={<ShopCatories category="women" banner={bannerwomen}/>}/>
             <Route path='/kid' element={<ShopCatories category="kid" banner={bannerkids}/>}/>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/card' element={<Shop/>}></Route>
              <Route path='/product/:productId' element={<Product />} />
             
      </Routes>
       <Footer/>
      
           
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
