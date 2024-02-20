/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './Tarjeta.css';

const Tarjeta = ({ texto, limiteCaracteres,title,srcImg}) => {
  const [expandido, setExpandido] = useState(false);

  const handleClick = () => {
    setExpandido(!expandido);
  };

  return (
    <div className="tarjeta">
      <h3 className='textCardAbout'>{title}</h3>
      <img src={srcImg} alt="" className='imgCardAbout' />
      <p>
        {expandido ? texto : texto.slice(0, limiteCaracteres)}
        {texto.length > limiteCaracteres && !expandido && '... '}
        {texto.length > limiteCaracteres && (
            <>
            <div className='btnCardAbout'>
                <button onClick={handleClick}>
                    {expandido ? '-' : '+'}
                </button>  
            </div>
          
            </>
   
        )}
      </p>
    </div>
  );
};

export default Tarjeta;
