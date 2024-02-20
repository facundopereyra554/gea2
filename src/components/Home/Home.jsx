import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import Tarjeta from '../Tarjeta/Tarjeta'
import { useEffect } from 'react'
import './Home.css' 

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
         <Navbar/>
        
        <div style={{marginTop: '100px'}}>
            <Banner/>
        </div>

        
        <div id='aboutGea' className='topInfo container'>
            <h3 className='main-sections-title main-sections-title-long'>SOBRE GEA</h3>
            <br />
            <br />
            <br />
            <div className='geaAbout'>
            
                <div>
                    <Tarjeta 
                        texto="El enfoque de GEA es brindar
                        asesoramiento profesional geológico
                        y soluciones técnicas.
                        Nuestro equipo esta formado por un equipo
                        multidisciplinario entre hidrogeólogos,
                        geólogos y profesionales de diferentes
                        ramas de la ciencias de la tierra altamente
                        capacitados que brindan herramientas
                        especificas, manejo de datos precisos y de
                        calidad para ayudar a comprender los
                        recursos hidrológicos"
                        limiteCaracteres={200}
                        title="OBJETIVOS"/>
                </div>
                <div>
                    <Tarjeta 
                            texto="Agregar valor a los recursos estudiados
                            mediante nuestra experiencia en
                            la industria.
                            Garantizar la fiabilidad de nuestros
                            servicios al ajustarnos a las normativas
                            y políticas actuales de la empresa
                            empleadora.
                            Otorgar confiabilidad en nuestros
                            servicios, adaptándonos en las normas
                            y políticas vigentes del empleador."
                            limiteCaracteres={210}
                            title="MISIÓN"/>
                </div>
                <div>
                    <Tarjeta 
                            texto="Ocupar un puesto de liderazgo en la
                            promoción y ejecución de servicios
                            mineros, con un firme compromiso hacia
                            el fomento de un desarrollo responsable
                            de la industria, respaldado por nuestra
                            amplia experiencia en la región de la Puna.
                            Gracias a nuestra trayectoria en proyectos
                            emblemáticos de esta zona, estamos en
                            posición de comprender las necesidades
                            singulares tanto de la industria como de
                            nuestros valiosos clientes"
                            limiteCaracteres={210}
                            title="VISIÓN"/>
                </div>

            </div>            
        </div>


        <div className=' container'>
            <h3 className='main-sections-title main-sections-title-long'>GEOFÍSICA DE POZO</h3>
            <div className='textFlex'>
                <div>
                    <p className='textHome'>
                        El perfilaje de pozo es una técnica que permite la medición, a lo largo
                        del pozo, de las características eléctricas de las formaciones geológicas
                        y de los fluidos contenidos en ellas, logrando mediante su interpretación
                        un pronóstico del potencial y la calidad de los recursos hidrogeológicos
                        del subsuelo.
                        Los parámetros geofísicos se representan verticalmente a partir de curvas
                        que otorga el perfilaje eléctrico de pozo. En las curvas se pueden leer
                        los valores de potencial espontáneo (SP), resistividad puntual (SPR),
                        resistividad normal corta (RNC) , de resistividad normal larga (RNL)
                        y gamma natural (GM) en forma simultánea. <br />
                        <br />

                    </p>

                    <p className='textHome' >Con las curvas obtenidas del Perfilaje Eléctrico y su comparación
                        se podrá definir:
                    </p>
                    
                    <ul className='list-texts listHome'>
                        <li>Litología</li>
                        <li>Definir distintos acuíferos</li>
                        <li>Definir el nivel estático de agua</li>
                        <li>Conocer el espesor del acuífero</li>
                        <li>Diseñar la habilitación de pozos, colocación de filtros y cañería ciega </li>
                    </ul>
                </div>
                <div className='imgGEOp'>
                    <div style={{marginTop: '70px'}}>
                        <div><img  src="../assets/img9.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="../assets/img3.jpg" alt="" /></div>
                        <div><img src="../assets/img14.jpeg" alt="" /></div>
                    </div>

                </div>

            </div>
            <div>
                
            </div>
        </div>

        <div className=' container'>
            <h3 className='main-sections-title main-sections-title-long'>DIRECCIÓN TÉCNICA DE POZO</h3>
            <div className='textFlex'>

                <div className='imgGEOp'>
                    <div style={{marginTop: '70px'}}>
                       <div> <img src="../assets/img17.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="../assets/img8.jpg" alt="" /></div>
                        <div><img src="../assets/img15.jpeg" alt="" /></div>
                    </div>

                </div>
                <div>
                    <p className='textHome'>
                        El control geológico de pozo o Mud Logging es una actividad técnica que juega un papel
                        clave durante las perforaciones.
                        Consiste en la recopilación, almacenamiento e interpretación de datos geológicos que se
                        obtienen durante la perforación de pozos.
                        Se desarrolla con la presencia de un Geólogo de campo en la plataforma de perforación.
                        <br />
                        

                    </p>

                    <p className='textHome' >Tareas de control geológico
                        en perforaciones rotary:
                        <br />
                        <br />
                    </p>
                    
                    <ul className='list-texts listHome'>
                        <li> Dirigir la obra</li>
                        <li>Toma de decisiones operativas</li>
                        <li>Logueo geológico de cutting</li>
                        <li>Recolección de muestras de roca/sedimentos</li>
                        <li>QA/QC</li>
                        <li>Calculo del tiempo de retorno</li>
                        <li>Control del lodo de perforación</li>
                        <li>Terminación de pozo</li>
                        <li>Análisis de Bombeo</li>
                        <li>Toma de parámetros físicos del agua</li>
                        <li>Control del tiempo de las operaciones</li>
                        <li>Controlar la seguridad de las operaciones</li>
                        <li>Base de datos</li>
                    </ul>
                </div>

            </div>
            <div>
                
            </div>
        </div>

        <div className='cards-containers container'>
            <div className="card" style={{width:'400px'}}>
            <div className='zoomImgContainer'>
                <img src="../assets/img14.jpeg" className="card-img-top" alt="..."/>
            </div>
                <div className="card-body">
                    <h3 className='titleCard'>FILMACIÓN DE POZO</h3>
                    <p className="card-text">
                        <ul className='listHomeCards'>
                            <li>Inspección de cañería</li>
                            <li>Estado de filtros</li>
                            <li>Uniones entre cañerías</li>
                            <li>Sedimentación del fondo del pozo</li>
                            <li>Obturaciones</li>
                        </ul>
                    </p>
                </div>
            </div>


            <div className="card" style={{width:'400px'}}>
                <div className='zoomImgContainer'>
                    <img src="../assets/img14.jpeg" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h3 className='titleCard'>DESINSTALACIÓN DE
                        BOMBAS SUMERGIBLES</h3>
                    <p className="card-text">
                        <ul className='listHomeCards'>
                            <li>Cambios de equipos </li>
                            <li> Evaluaciones hidráulicas</li>
                            <li>Evaluaciones geoquímicas</li>
                        </ul>
                    </p>
                </div>
            </div>


            <div className="card" style={{width:'400px'}}>
                <div className='zoomImgContainer'>
                    <img src="../assets/img14.jpeg" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h3 className='titleCard'>ARMADO DE BROCAL
                        Y MANIFOL</h3>
                    <p className="card-text">
                        <ul className='listHomeCards'>
                            <li>Según normativa gubernamentales vigentes</li>
                            <li>Cambios de sistemas</li>
                            <li>Mejoras de sistemas de medición</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>

        <div className='container lastPartContainer'>
            <div id='minera' className='gridPart'>
                <div>
                    <h3 className='main-sections-title listHomeLast'> <br />MINERÍA <br /></h3>
                    <br />
                    <ul className='list-texts listHome'>
                        <li>Presentación de programas de exploración a organizaciones gubernamentales.</li>
                        <li>Obtención de permisos de exploración.</li>
                        <li>Prospección / Exploración.</li>
                        <li>Procesamiento GIS e imágenes satelitales: Mapa geológico.</li>
                        <li>Mapeo estructural.</li>
                        <li>Mapeo de alteraciones.</li>
                        <li>Mapeo temáticos geoquímicos.</li>
                        <li>Programación, elaboracion y ejecucion de protocolos de muestreos aplicado a diferentes tipologías de yacimientos.</li>
                        <li>QA/QC</li>
                        <li>Control geológico de pozo.</li>
                        <li>Logueo geológico y logueo geotécnico registro fotográfico</li>
                        <li>Generación de base de datos.</li>
                        <li>Informe final de exploración/prospección.</li>
                    </ul>
                </div>
                <div id='ma'>
                    <h3 className='main-sections-title listHomeLast'>MEDIO AMBIENTE</h3>
                    <br />
                    <ul className='list-texts listHome'>
                        <li>Informe de impacto ambiental y social para las etapas de prospección, exploración y explotación minera, urbanizaciones.</li>
                        <li>Auditorías y diagnósticos ambientales.</li>
                        <li>Planes remediación.</li>
                        <li>Riesgo y pasivo ambiental.</li>
                        <li>Factibilidad de sustentabilidad e integración ambiental.</li>
                        <li>Caracterización ambiental (línea de base).</li>
                        <li>Diseño e implementación de programas de monitoreo de agua, suelo, aire</li>
                        <li>Capacitación ambiental.</li>
                        <li>Coordinación de monitoreos participativos</li>
                        <li>Documentación regulatoria </li>
                        <li>Negociación con agencias reguladoras </li>
                        <li>Informes de cumplimiento</li>
                        <li>Gestión de datos ambientales</li>
                    </ul>
                </div>
            </div>

        </div>

        <div className='galeryHome container'>
            <div>
                <div><img src="../assets/img5.jpg" alt="" /></div>
                <div><img src="../assets/img17.jpg" alt="" /></div>
                <div><img src="../assets/img22.jpg" alt="" /></div>
                <div><img src="../assets/img25.jpg" alt="" /></div>
            </div>

            <div>
                <div><img src="../assets/img19.jpg" alt="" /></div>
                <div><img src="../assets/img3.jpg" alt="" /></div>
                <div><img src="../assets/img24.jpg" alt="" /></div>
            </div>

            <div>
                <div><img src="../assets/img3.jpg" alt="" /></div>
                <div><img src="../assets/img20.jpeg" alt="" /></div>
                <div><img src="../assets/img23.jpg" alt="" /></div>
            </div>

            <div>
                <div><img src="../assets/img21.jpeg" alt="" /></div>
                <div><img src="../assets/img3.jpg" alt="" /></div>
            </div>
        </div>











        <Footer />
        </>
    )
}

export default Home