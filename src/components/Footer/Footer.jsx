import{ useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FormattedMessage} from 'react-intl';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_d6f6j5o', 'template_quw062y', e.target, 'aESkbX7WVqlva8ph4')
        .then((result) => {
            console.log(result.text);
            alert('Mensaje enviado con éxito');
            setFormData({
                    name: '',
                    email: '',
                    message: ''
            });
        }, (error) => {
            console.log(error.text);
            alert('Error al enviar el correo');
        });
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <footer id='Contacto' className="footerContainer text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='titleFooter'><FormattedMessage id="contactForm.title" /></h2>
                        <br />
                        <br />
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name"><FormattedMessage id="contact.name" /></label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="email"><FormattedMessage id="contact.email" /></label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="message"><FormattedMessage id="contact.message" /></label>
                            <textarea className="form-control" id="message" rows="3" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary submitBtn"><FormattedMessage id="contact.send" /></button>
                        </form>
                    </div>
                    <div className="col-md-6 extraInfo">
                        <h2 className='titleFooter'><FormattedMessage id="contactForm.info" /></h2>
                        <br />
                        <br />
                        <div className='InfopER'>
                            <p><FormattedMessage id="info.phone" />: +54 9 387 5321985  /  +54 9 387 5090264</p>
                            <p>Email: info@gearecursoshidricos.com</p>
                            <div className='qrs'>
                                <img src="../assets/qrNumber1.png" alt="" />
                                <img src="../assets/qrNumber1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container slider-logos'>
                <div className=''>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/aeg.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/aminco.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/andes.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/conosur.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/drillar.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/foraco.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/ganfeng.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/litica.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/msr.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/santafe.png" alt="" /></div>
                            <div className='div-container-img'><img className='img-fluid lgs-com' src="../assets/lgosComp/virgen.png" alt="" /></div>
                        </Slider>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
