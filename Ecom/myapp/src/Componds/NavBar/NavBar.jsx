import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [menu,setmenu]=useState('shop');

  return (
    <div className='Navbar'>

        <div className='logoside'>
            <img src={logo}alt=''/>
            <h1>Shopper</h1>
        </div>
        <div className='navtitle'>
            <ul>
               <li onClick={()=>{setmenu('mens')}}  ><Link style={{textDecoration:'none'}} to='/men'>Mens </Link >{menu==='mens'?<hr/>:<h/>}</li>
                <li onClick={()=>{setmenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<h/>} </li>
               <li onClick={()=>{setmenu('kid')}}><Link style={{textDecoration:'none'}} to='/kid'>Kids</Link>{menu==='kids'?<hr/>:<h/>}</li>
                <li onClick={()=>{setmenu('women')}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==='women'?<hr/>:<h/>}</li>
            </ul>
        </div>
        <div className='shopsite'>
            <button className='nav-buttons'><Link to='/login'>Login</Link></button>
            <div>
             <Link to='/card'>
                       <img src={cart} alt='Cart' />
              </Link>

            </div>
             
              <div className='nav-count'>0</div>
               

             

        </div>


        


      



        
      
    </div>
  )
}

export default NavBar
