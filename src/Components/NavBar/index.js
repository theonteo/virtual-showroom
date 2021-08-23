import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from '../../images/logo.png'




function NavBar() {

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton=()=>
    {
        if(window.innerWidth <=960)
        {
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
    showButton();
    }, [button]);

    window.addEventListener('resize',showButton);

    return (
        <>
        <nav className = "navbar">
            <div className = "navbar-container">
                <Link to="/" className="navbar-logo" onClick ={ closeMobileMenu}>
                <img src = {logo} className = "logo" alt=""></img>        
                </Link>

                <div className ='menu-icon' 
                onClick = {handleClick}>
                    <i className =
                     {click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                
                <ul className = {click?'nav-menu active':'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to='/' className = 'nav-links' onClick = {closeMobileMenu}>
                            1. Home.
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to='/services' className = 'nav-links' onClick = {closeMobileMenu}>
                            2. Resume.
                        </Link>
                    </li>
                   

                </ul>
               

            </div>
        </nav>
        </>
    )
}

export default NavBar;
