import './Banner.css';
function Banner() {


    return(
        <>
        <div className="section">
            <div className="fixed textBannerP">
                <img src="../assets/logo.png" alt="Logo" className='Logo' />
                <h1 className="large">GEA</h1>
                <p className='subTextBanner'> <span>Consultores</span> 
                    <br />
                    en recursos hidricos SRL
                </p>
               
            </div>
        </div>
        <div className="section section2">
            <div className="fixed">
            <h1>Gea personifica el origen de la vida, siendo la divinidad que
                encarna a la Tierra, la feminidad y la plenitud de la fortaleza.
                Gea representa la tierra, pero también el elemento vital del
                agua. Ella simboliza ese flujo constante, una fuente
                inagotable de creación.</h1>
                <img src="../assets/logo.png" alt="Logo" className='logo' />
            </div>
        </div>

        <div className="ola">
        </div>
        </>
    )
}
export default Banner;