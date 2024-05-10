import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
import { MenuContext, MenuProvider } from '../../Context/MenuContext';

export const Navbar = () => {

    const {isactive,setisactive} = useContext(MenuContext)
      const handleMenu  =()=>{
        setisactive(!isactive)
    }

    const navLinks = [
        { id: 'categories', to: '/categories', text: 'categories' },
        { id: 'news', to: '/newarrivals', text: 'News' },
        { id: 'shop', to: '/shop', text: 'Shop' },
      
    ];

    const renderNavLinks = navLinks.map((link) => (
        <li key={link.id}>
            <NavLink
                to={link.to}
                className={`nav-link ${({ isActive }) => (isActive ? 'active' : '')
                    }`}
            >
                {link.text}
            </NavLink>
        </li>
    ));

    return (
        <nav>
            <div className="StoreNavbar">
               <div className='leftNav'>
               <div>
               <i className='bx bx-menu-alt-left' onClick={handleMenu}></i>
                </div>
                <div className="storelogo">
                    <Link to='/store'>
                        <img src="/logo.svg" alt="Evolution" title="Evolution" />
                    </Link>
               </div>
               </div>
                <div className="storeLinks">
                    <ul id="linksbar" >
                        {renderNavLinks}
                   <li className='iconsbar'>
                    <Link>
                   <i class='bx bx-shopping-bag'></i>
                    </Link>
                    <Link>
                    <i class='bx bx-heart'></i>
                    </Link>
                   </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
