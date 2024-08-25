import { useEffect } from 'react'
import LanguageButton from "./LanguageButton";
import {FormattedMessage} from 'react-intl';
import "./Nav.css"

function Nav({setLocale, locale}) {

        
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

    return (
        <>
            <header className="headerNav">
                <div className="Navcontainer container">
                    <input type="checkbox" name="" id="check"/>
                    
                    <div className="logo-container">
                        <h3 className="logolink">GEA</h3>
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                            <li className="nav-link" style={{ "--i": ".6s" }}>
                                <a href="#aboutGea"> <FormattedMessage id="nav.us" /></a>
                            </li>

                                <li className="nav-link" style={{ "--i": ".85s" }}>
                                    <a href="#"><FormattedMessage id="nav.services" /><i className="fas fa-caret-down"></i></a>
                                    <div className="dropdown">
                                        <ul>
                                            <li className="dropdown-link">
                                                <a href="#hidrogeo"><FormattedMessage id="hydrogeology" /><i className="fas fa-caret-down"></i></a>
                                                <div className="dropdown second">
                                                    <ul>
                                                        <li className="dropdown-link">
                                                            <a href="#sev">SEV</a>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <a href="#geofisica"><FormattedMessage id="wellGeology" /></a>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <a href="#dirtec"><FormattedMessage id="technicalDirection.description" /></a>
                                                        </li>
                                                        <div className="arrow"></div>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="#sevaso"><FormattedMessage id="nav.sevaso" /><i className="fas fa-caret-down"></i></a>
                                                <div className="dropdown second">
                                                    <ul>
                                                        <li className="dropdown-link">
                                                            <a href="#sevaso"><FormattedMessage id="wellFilming.description" /></a>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <a href="#sevaso"><FormattedMessage id="pumpInstallation.description" /></a>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <a href="#sevaso"><FormattedMessage id="wellHeadAndManifold.description" /></a>
                                                        </li>
                                                        <div className="arrow"></div>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="#mineria"><FormattedMessage id="mining.description" /></a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="#medAmb"><FormattedMessage id="environment.description" /></a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="#topo"><FormattedMessage id="topography.description" /></a>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-link" style={{ "--i": "1.35s" }}>
                                    <a href="#"><FormattedMessage id="nav.contact"/></a>
                                </li>

                                <li className="nav-link" style={{ "--i": "1.35s" }}>
                                    <LanguageButton setLocale={setLocale} locale={locale} />
                                </li>

                            </ul>
                        </div>

                        {/* <div className="log-sign" style="--i: 1.8s">
                            <a href="#" className="btn transparent">Log in</a>
                            <a href="#" className="btn solid">Sign up</a>
                        </div>  */}
                    </div>

                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav