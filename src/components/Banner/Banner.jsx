import './Banner.css';
import {FormattedMessage} from 'react-intl';
function Banner({imgSrcLeng}) {


    return(
        <>
        <div className="section">
            <div className="fixed textBannerP">
                <img src={imgSrcLeng} alt="Logo" className='Logo' />      
            </div>
        </div>
        <div className="section section2">
            <div className="fixed">
            <h1><FormattedMessage id="aboutUs.ourHistory" /></h1>
            <img src="../assets/newlogo.png" alt="Logo" className='Logo2' />
            </div>
        </div>

        <div className="ola">
        </div>
        </>
    )
}
export default Banner;