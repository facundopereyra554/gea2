import { Link} from "react-router-dom"
import  React, { useState , useEffect } from 'react'
import "./Navbar.css"
import LanguageButton from "./LanguageButton";
import {FormattedMessage} from 'react-intl';
function Navbar({setLocale, locale}){

    const [isMenuOpen, setMenuOpen] = useState(false);


    
    useEffect(() => {
        const scrollWatcher = () => {
        const navBar = document.querySelector(".headerNav");
        if (window.scrollY >= 100) {
            navBar.classList.add("scroll");
        } else {
            navBar.classList.remove("scroll");
        }
        };

        window.addEventListener("scroll", scrollWatcher);
    }, []);

    
  
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
  
    const handleSubMenuClick = (event) => {
        if (window.innerWidth <= 991) {
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            if (menuItemHasChildren.classList.contains('active')) {
                collapseSubMenu();
            } else {
                if (document.querySelector('.menu-item-has-children.active')) {
                    collapseSubMenu();
                }
                menuItemHasChildren.classList.add('active');
                const subMenu = menuItemHasChildren.querySelector('.sub-menu');
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            }
        }
    };
  
    const collapseSubMenu = () => {
        const activeMenuItem = document.querySelector('.menu-item-has-children.active');
        if (activeMenuItem) {
            const subMenu = activeMenuItem.querySelector('.sub-menu');
            subMenu.removeAttribute('style');
            activeMenuItem.classList.remove('active');
        }
    };
  
    const handleResize = () => {
        if (window.innerWidth > 991) {
            collapseSubMenu();
            if (isMenuOpen) {
                setMenuOpen(false);
            }
        }
    };
  
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>


        <section className="headerNav navbar1">
                <div className="contNav container">
                    <div className="header-main">
      
                        <div className="open-nav-menu" onClick={toggleMenu}>
                            <span></span>
                        </div>
                        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
                        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                            <div className="close-nav-menu" onClick={toggleMenu}>
                                <img src="../assets/close.svg" alt="close" />
                            </div>

                            
                            <ul className="menu">
                                <Link className="logolink" to="/">
                                GEA
                                </Link> 


                                <li className="menu-item">
                                    <a href="#aboutGea">
                                        <FormattedMessage id="nav.us" />
                                    </a>
                                </li>


                                <li className="menu-item menu-item-has-children">
                                    <a href="#" data-toggle="sub-menu" onClick={handleSubMenuClick}>
                                        <FormattedMessage id="nav.services" />
                                        {/* <i className="plus"></i> */}
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-hover">
                                            <a  href='#hidrogeo'><FormattedMessage id="hydrogeology" /></a>
                                        </li>
                                        <li className="menu-item menu-item-hover">
                                            <a  href='#geofisica'><FormattedMessage id="wellGeology" /></a>
                                        </li>                                        
                                        <li className="menu-item menu-item-hover">
                                            <a  href='#dirtec'><FormattedMessage id="technicalDirection.description" /></a>
                                        </li>
                                        <li className="menu-item menu-item-hover">
                                            <a  href='#mineria'><FormattedMessage id="mining.description" /></a>
                                        </li>
                                        <li className="menu-item menu-item-hover">
                                            <a  href='#medAmb'><FormattedMessage id="environment.description" /></a>
                                        </li>
                                        <li className="menu-item menu-item-hover">
                                            <a  href='#topo'><FormattedMessage id="topography.description" /></a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu-item">
                                    <a href="#Contacto"><FormattedMessage id="nav.contact"/> </a>
                                </li>

                                <li className="menu-item">
                                    <LanguageButton setLocale={setLocale} locale={locale}/>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
        </section>


        {/* <section className='navbar'>
            <div className="container">
                <img src="../assets/logoClaro.png" alt="logo" className="logo" />
                <div className="pages">
                    <ul>
                        <li><Link to="/" className="link">Inicio</Link></li>
                        <li><Link to="/Cursos" className="link">Cursos</Link></li>
                        <li><Link to="/TecDes" className="link">Carreras</Link></li>
                        <li><Link to="/Nosotros" className="link">Nosotros</Link></li>
                    </ul>
                </div>
            </div>
        </section>             */}
        </>
    )
}

export default Navbar