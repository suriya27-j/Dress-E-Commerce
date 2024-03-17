import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../asserts/logo.png';
import logo1 from '../asserts/logo1.png';
import cart_icon from '../asserts/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import drop from '../asserts/1.png'
const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo1} alt=''/>
            <p>BellaDre</p>
        </div>
        <img  className='nav-dropdown' onClick={dropdown_toggle}src={drop} alt='' />
        <ul  ref={menuRef}className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none'}}to='/'>SHOP</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>mens</Link> {menu==="mens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}} to='/Womens'>Womens</Link>{menu==="womens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}}to='/kids'>kids</Link> {menu==="kids"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>log out</button>:
             <Link to='/login'><button>Login</button></Link>}
            <Link to="/cart"><img src={cart_icon} alt=''/></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar