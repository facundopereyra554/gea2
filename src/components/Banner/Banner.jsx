import './Banner.css';
import {FormattedMessage} from 'react-intl';
function Banner() {


    return(
        <>
        <div className="section">
            <div className="fixed textBannerP">
                <img src="../assets/logo.png" alt="Logo" className='Logo' />
                <h1 className="large">GEA</h1>
                <p className='subTextBanner'> <span><FormattedMessage id="banner.title" /></span> 
                    <br />
                    <FormattedMessage id="banner.subTitle" />
                </p>
               
            </div>
        </div>
        <div className="section section2">
            <div className="fixed">
            <h1><FormattedMessage id="aboutUs.ourHistory" /></h1>
                <img src="../assets/logo.png" alt="Logo" className='logo' />
            </div>
        </div>

        <div className="ola">
        </div>
        </>
    )
}
export default Banner;