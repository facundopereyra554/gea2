import '../Hidro/Hidro.css'
function Hidrohome() {
    return (
        <>
        <div className='hidro-container container' style={{marginTop: '140px'}}>
            <h3 className='main-sections-title main-sections-title-long pcview'>HIDROGEOLOGÍA</h3>
            <h3 className='main-sections-title main-sections-title-long celview'>HIDRO- GEOLOGÍA</h3>
            <p className='main-sections-description'>
                PARA LA INDUSTRIA MINERA METALIFERA- NO METALIFERA (Litio)
                AGRICOLA - URBANIZACIONES
            </p>

            <div className='hidro-info'>
                <div>
                    <ul className='list-texts'>
                        <li><span>Estudios de prefactibilidad</span></li>
                        <li><span>Análisis de cuenca a partir de GIS</span></li>
                        <li><span>Obtención de autorizaciones para
                            exploración de agua subterránea y
                            de licencias para explotación</span></li>
                        <li><span>Programas de exploración a través
                            de geofísica de superficie.</span></li>
                        <li><span>Caracterización hidrogeológica.</span></li>
                        <li><span>Estudios de balance hídrico.</span></li>
                        <li><span>Programas de perforaciones enfunción de los tiempos previstos para la
                            exploración</span></li>
                        <li><span>Programas de recolección de datos</span></li>
                    </ul>
                </div>
                <div className='hidro-imgs'>
                    <img src="../assets/img2.jpg" alt="" />
                    <div className='hidro-imgs-column'>
                        <img src="../assets/img5.jpg" alt="" />
                        <img src="../assets/img6.jpg" alt="" />
                    </div>
                    
                </div>
            </div>


            <h3 className='main-sections-title main-sections-title-long'>SONDEO ELÉCTRICO VERTICAL</h3>
            <p className='main-sections-description'>
                SEV
            </p>


            <div className='hidro-info'>
                <div className='sondeo_padd'>
                    <ul className='list-texts'>
                        <li><span>Es un método económico previo a
                                la toma de decisiones para colocar
                                un pozo de perforación.</span></li>

                        <li><span>Permite Conocer las propiedades
                                    eléctricas de los materiales que
                                    constituyen del subsuelo</span></li>

                        <li><span>Permite definir espesores no
                                    saturados.</span></li>

                        <li><span>Definir espesores saturados.</span></li>

                        <li><span>Conocer interfases de diferentes
                                    acuíferos dulce, salobres, salados.</span></li>

                        <li><span>Permite proyectar la profundidad de
                                    un pozo.</span></li>

                        <li><span>Permite diseñar tentativamente un pozo.</span></li>

                        <li><span>Con varias secciones geo eléctricas
                                    correlacionados en profundidad
                                    se puede crear corte geo eléctrica.</span></li>
                    </ul>
                </div>
                <div className='hidro-imgs-column2'>
                    <img src="../assets/graph.jpg" alt="" />
                    <img src="../assets/img4.jpg" alt="" />
                </div>
            </div>

        </div>  
        </>
    )
}

export default Hidrohome