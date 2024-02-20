import{ useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

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

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <footer id='Contacto' className="footerContainer text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className='titleFooter'>Formulario de Contacto</h2>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Ingrese su email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Mensaje" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary submitBtn">Enviar</button>
            </form>
          </div>
          <div className="col-md-6 extraInfo">
            <h2 className='titleFooter'>Información de Contacto</h2>
            <br />
            <br />
            <div className='InfopER'>
                <p>Teléfono: +54 9 387 5321985  /  +54 9 387 5090264</p>
                <p>Email: info@gearecursoshidricos.com</p>
                <div className='qrs'>
                    <img src="../assets/qrNumber1.png" alt="" />
                    <img src="../assets/qrNumber1.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
