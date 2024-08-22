import React from 'react'
import './NavBar.css'
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='Navbar'>
        <div className='logoside'>
            <img src={logo}alt=''/>
            <h1>Shopper</h1>
        </div>
        <div className='navtitle'>
            <ul>
               <li><Link style={{textDecoration:'none'}} to='/Men'>Men</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/Shop'>Shop</Link></li>
               <li><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/Women'>Women</Link></li>
            </ul>
        </div>
        <div className='shopsite'>
            <button className='nav-buttons'>Login</button>
              <img src={cart}alt=''/>
              <div className='nav-count'>0</div>
               

             

        </div>


        


      



        
      
    </div>
  )
}

export default NavBar
