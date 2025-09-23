import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useAdminAuth } from '../../admin/auth/AdminAuthContext';

const Navbar = ({setShowLogin, openRoleSelect, isUserLoggedIn, onUserLogout}) => {

    const [menu,setMenu]= useState("home");
    const navigate = useNavigate();
    const location = useLocation();

    const {getTotalCartAmount} = useContext(StoreContext);

    const handleContactClick = () => {
        setMenu("contact-us");
        if (location.pathname !== '/') {
            navigate('/#footer');
        } else {
            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <Link to='/menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</Link>
            <a href="/delivery" onClick={()=>setMenu("delivery")} className={menu==="delivery"?"active":""}>Delivery</a>
            <a href="#" onClick={handleContactClick} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {(() => {
                try {
                    const { isAuthenticated } = useAdminAuth();
                    if (isAuthenticated) {
                        return (
                            <Link to='/admin'>
                              <img src={assets.profile_icon} alt="Admin Profile" className="profile-icon" />
                            </Link>
                        )
                    }
                } catch {}
                return isUserLoggedIn ? (
                    <img src={assets.profile_icon} alt="User Profile" className="profile-icon" onClick={()=>navigate('/profile')} />
                ) : (
                    <button onClick={()=> (openRoleSelect ? openRoleSelect() : setShowLogin(true))}>sign in</button>
                )
            })()}
        </div>
    </div>
  )
}

export default Navbar
