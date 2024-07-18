import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Tarjeta from '../Tarjeta/Tarjeta'
import { useEffect } from 'react'
import './Home.css' 
import Hidrohome from './Hidrohome'
import {FormattedMessage} from 'react-intl';

import { useState } from 'react';

import Img5 from "../../assets/gallery/img5.jpg";
import Img17 from "../../assets/gallery/img17.jpg";
import Img19 from "../../assets/gallery/img19.jpg";
import Img20 from "../../assets/gallery/img20.jpg";
import Img21 from "../../assets/gallery/img21.jpg";
import Img22 from "../../assets/gallery/img22.jpg";
import Img23 from "../../assets/gallery/img23.jpg";
import Img24 from "../../assets/gallery/img24.jpg";
import Img25 from "../../assets/gallery/img25.jpg";
import ImgGal1 from "../../assets/gallery/imgGal1.jpg";
import ImgGal2 from "../../assets/gallery/imgGal2.jpg";
import ImgGal3 from "../../assets/gallery/imgGal3.jpg";
import ImgGal4 from "../../assets/gallery/imgGal4.jpg";
import ImgGal5 from "../../assets/gallery/imgGal5.jpg";
import ImgGal8 from "../../assets/gallery/imgGal8.jpg";


function Home({ setLocale, locale }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [textObj, setTextObj] = useState("");
    const [teamValueAddition, setTeamValueAddition] = useState("");
    const [teamLeadership, setTeamLeadership] = useState("");
    const [long, setLong] = useState();

    // useEffect(() => {
    //     import(`./lang/${locale}.json`)
    //         .then((messages) => {
    //             setTextObj(messages.default.aboutUs.objectives);
    //             setTeamValueAddition(messages.default.team.valueAddition);
    //             setTeamLeadership(messages.default.team.leadership);
    //         })
    //         .catch((error) => {
    //             console.error(`Error loading the language file for ${locale}:`, error);
    //         });
    // }, [locale]);

    useEffect(() => {
        if (locale === 'es') {
            setTextObj("GEA se enfoca en proporcionar asesoramiento geológico profesional y soluciones técnicas. Nuestro equipo está compuesto por personal multidisciplinario que incluye hidrogeólogos, geólogos y expertos de diversas ramas de las ciencias de la tierra. Nuestro grupo ofrece herramientas específicas y gestión de datos precisos y de calidad para ayudar a comprender los recursos hidrológicos.") ;
            setTeamValueAddition("Agregar valor a los recursos estudiados mediante nuestra experiencia en la industria. Garantizar la fiabilidad de nuestros servicios al ajustarnos a las normativas y políticas actuales de la empresa empleadora. Otorgar confiabilidad en nuestros servicios, adaptándonos en las normas y políticas vigentes del empleador.");
            setTeamLeadership("cupar un puesto de liderazgo en la promoción y ejecución de servicios mineros, con un firme compromiso hacia el fomento de un desarrollo responsable de la industria, respaldado por nuestra amplia experiencia en la región de la Puna. Gracias a nuestra trayectoria en proyectos emblemáticos de esta zona, estamos en posición de comprender las necesidades singulares tanto de la industria como de nuestros valiosos clientes.");
            setLong(200);
        } else {
            setTextObj("GEA focuses on providing professional geological advice and technical solutions. Our team is composed of multidisciplinary personnel, including hydrogeologists, geologists, and experts from various branches of earth sciences. Our group offers specific tools and accurate quality data management to help understand hydrological resources.");
            setTeamValueAddition("Add value to the resources studied through our industry experience. To guarantee the reliability of our services by complying with the current regulations and policies of the employer company. To provide reliability in our services, adapting ourselves to the employer's standards and policies in force.");
            setTeamLeadership("To occupy a leadership position in the promotion and execution of mining services, with a firm commitment to the promotion of responsible development of the industry, backed by our extensive experience in the Puna region. With our track record on landmark projects in this area, we are in a position to understand the unique needs of both the industry and our valued customers.");
            setLong(170);
        }
    }, [locale]);

    console.log(textObj);

    return (
        <>
        <div style={{marginTop: '100px'}}>
            <Banner/>
        </div>

        
        <div id='aboutGea' className='topInfo container'>
            <h3 className='main-sections-title main-sections-title-long'><FormattedMessage id="nav.us" /></h3>
            <br />
            <br />
            <br />
            <div className='geaAbout'>
            
                <div>
                    <Tarjeta texto={textObj} limiteCaracteres={200} title="team.obj.title"/>
                </div>
                <div>
                    <Tarjeta texto={teamValueAddition} limiteCaracteres={200} title="team.mision.title"/>
                </div>
                <div>
                    <Tarjeta texto={teamLeadership} limiteCaracteres={long} title="team.vision.title"/>
                </div>

            </div>
            <div id='hidrogeo'></div>          
        </div>
        <div>
            <Hidrohome/>
            
        </div>
        


        <div className='container' id='geofisica'>
            <h3 className='main-sections-title main-sections-title-long'><FormattedMessage id="wellGeology" /></h3>
            <div className='textFlex'>
                <div>
                    <p className='textHome'>
                        <FormattedMessage id="wellLogging.description" />

                        <FormattedMessage id="wellLogging.parameters" />
                        <br />
                        <br />

                    </p>

                    <p className='textHome' ><FormattedMessage id="wellLogging.curveAnalysis" /></p>
                    
                    <ul className='list-texts listHome'>
                        <li><FormattedMessage id="curveAnalysisDetails.lithology" /></li>
                        <li><FormattedMessage id="curveAnalysisDetails.aquifers" /></li>
                        <li><FormattedMessage id="curveAnalysisDetails.staticWaterLevel" /></li>
                        <li><FormattedMessage id="curveAnalysisDetails.aquiferThickness" /></li>
                        <li><FormattedMessage id="curveAnalysisDetails.wellCompletionDesign" /></li>
                    </ul>
                </div>
                <div className='imgGEOp'>
                    <div style={{marginTop: '70px'}}>
                        <div><img  src="../assets/img9.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="../assets/img3.jpg" alt="" /></div>
                        <div><img src="../assets/imggeof.jpg" alt="" /></div>
                    </div>

                </div>

            </div>
            <div>
                
            </div>
        </div>

        <div className=' container' id='dirtec'>
            <h3 className='main-sections-title main-sections-title-long'><FormattedMessage id="technicalDirection.description" /></h3>
            <div className='textFlex'>

                <div className='imgGEOp'>
                    <div style={{marginTop: '70px'}}>
                       <div> <img src="../assets/img17.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="../assets/img8.jpg" alt="" /></div>
                        <div><img src="../assets/imgpz1.png" alt="" /></div>
                    </div>

                </div>
                <div>
                    <p className='textHome'>
                        <FormattedMessage id="technicalDirection.mudLogging" />
                        <FormattedMessage id="technicalDirection.dataManagement" />
                        <FormattedMessage id="technicalDirection.fieldGeologistPresence" />
                        <br />
                    </p>

                    <p className='textHome' > <FormattedMessage id="technicalDirection.rotaryDrillingControl" />
                        <br />
                        <br />
                    </p>
                    
                    <ul className='list-texts listHome'>
                        <li> <FormattedMessage id="rotaryDrillingTasks.siteManagement" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.operationalDecisions" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.cuttingLogging" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.rockSamplesCollection" /></li>
                        <li>QA/QC.</li>
                        <li><FormattedMessage id="rotaryDrillingTasks.returnTimeCalculation" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.mudControl" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.wellCompletion" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.pumpingAnalysis" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.waterParameters" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.operationTimeControl" /></li>
                        <li><FormattedMessage id="rotaryDrillingTasks.safetyControl" /></li>
                        <li><FormattedMessage id="technicalDirection.db" /></li>
                    </ul>
                </div>

            </div>
            <div>
                
            </div>
        </div>

        <div className='cards-containers container'>
            <div className="card" style={{width:'400px'}}>
            <div className='zoomImgContainer'>
                <img src="../assets/filpz1.jpg" className="card-img-top" alt="..."/>
            </div>
                <div className="card-body">
                    <h3 className='titleCard'><FormattedMessage id="wellFilming.description" /></h3>
                    <p className="card-text">
                        <ul className='listHomeCards'>
                            <li><FormattedMessage id="wellFilming.pipeInspection" /></li>
                            <li><FormattedMessage id="wellFilming.filterCondition" /></li>
                            <li><FormattedMessage id="wellFilming.pipeJoints" /></li>
                            <li><FormattedMessage id="wellFilming.bottomSedimentation" /></li>
                            <li><FormattedMessage id="wellFilming.obstructions" /></li>
                        </ul>
                    </p>
                </div>
            </div>


            <div className="card" style={{width:'400px'}}>
                <div className='zoomImgContainer'>
                    <img src="../assets/img14.jpeg" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h3 className='titleCard'><FormattedMessage id="pumpInstallation.description" /></h3>
                    <p className="card-text">
                        <ul className='listHomeCards'>
                            <li><FormattedMessage id="pumpInstallation.equipmentChanges" /> </li>
                            <li><FormattedMessage id="pumpInstallation.hydraulicEvaluations" /></li>
                            <li><FormattedMessage id="pumpInstallation.geochemicalEvaluations" /></li>
                        </ul>
                    </p>
                </div>
            </div>


            <div className="card" style={{width:'400px'}}>
                <div className='zoomImgContainer'>
                    <img src="../assets/filpz3.jpg" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h3 className='titleCard'><FormattedMessage id="wellHeadAndManifold.description" /></h3>
                    <p className="card-text">
                        <ul className='listHomeCards'>
                            <li><FormattedMessage id="wellHeadAndManifold.governmentStandards" /></li>
                            <li><FormattedMessage id="wellHeadAndManifold.systemChanges" /></li>
                            <li><FormattedMessage id="wellHeadAndManifold.measurementImprovements" /></li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>

        <div id='mineria' className='container lastPartContainer'>
            <div className='gridPart'>
                <div>
                    <h3 className='main-sections-title listHomeLast'> <br /><FormattedMessage id="mining.description" /> <br /></h3>
                    <br />
                    <ul className='list-texts listHome'>
                        <li><FormattedMessage id="mining.explorationPrograms" /></li>
                        <li><FormattedMessage id="mining.explorationPermits" /></li>
                        <li><FormattedMessage id="mining.gisProcessing" /></li>
                        <li><FormattedMessage id="mining.geologicalMapping" /></li>
                        <li><FormattedMessage id="mining.structuralMapping" /></li>
                        <li><FormattedMessage id="mining.thematicMapping" /></li>
                        <li><FormattedMessage id="mining.samplingProtocols" /></li>
                        <li><FormattedMessage id="mining.qaQc" /></li>
                        <li><FormattedMessage id="mining.geologicalLogging" /></li>
                        <li><FormattedMessage id="mining.dataManagement" /></li>
                        <li><FormattedMessage id="mining.projectEvaluation" /></li>
                    </ul>
                </div>
                <div id='medAmb'>
                    <h3 className='main-sections-title listHomeLast'><FormattedMessage id="environment.description" /></h3>
                    <br />
                    <ul className='list-texts listHome'>
                        <li><FormattedMessage id="environment.impactAssessment" /></li>
                        <li><FormattedMessage id="environment.auditsAndDiagnostics" /></li>
                        <li><FormattedMessage id="environment.remediationPlans" /></li>
                        <li><FormattedMessage id="environment.environmentalRisk" /></li>
                        <li><FormattedMessage id="environment.sustainabilityFeasibility" /></li>
                        <li><FormattedMessage id="environment.baselineCharacterization" /></li>
                        <li><FormattedMessage id="environment.monitoringPrograms" /></li>
                        <li><FormattedMessage id="environment.environmentalTraining" /></li>
                        <li><FormattedMessage id="environment.participatoryMonitoring" /></li>
                        <li><FormattedMessage id="environment.regulatoryDocumentation" /></li>
                        <li><FormattedMessage id="environment.regulatorNegotiation" /> </li>
                        <li><FormattedMessage id="environment.complianceReports" /></li>
                        <li id='topo'><FormattedMessage id="environment.dataManagement" /></li>
                    </ul>
                </div>
            </div>

        </div>

        <div  className='container topographyContainer'>
            <h3 className='main-sections-title '><FormattedMessage id="topography.description" /></h3>
            <div className="textFlex">
                <div>

                </div>
                <div>
                    <br />
                    <br />
                    <ul className='list-texts listHome'>
                        <li><FormattedMessage id="topography.civilWorks" /></li>
                        <li><FormattedMessage id="topography.roadDesign" /></li>
                        <li><FormattedMessage id="topography.hydrologyAnalysis" /></li>
                        <li><FormattedMessage id="topography.generalSurveying" /></li>
                        <li><FormattedMessage id="topography.digitalElevationModels" /></li>
                        <li><FormattedMessage id="topography.leveling" /></li>
                        <li><FormattedMessage id="topography.excavations" /></li>
                        <li><FormattedMessage id="topographycontourMapping" /></li>

                    </ul>
                </div>
            </div>
        </div>

        <div className='galeryHome container'>
            <div>
                <div><img src={Img5} alt="" /></div>
                <div><img src={Img17} alt="" /></div>
                <div><img src={Img22} alt="" /></div>
                <div><img src={Img25} alt="" /></div>
            </div>

            <div>
                <div><img src={Img19} alt="" /></div>
                <div><img src={ImgGal1} alt="" /></div>
                <div><img src={Img24} alt="" /></div>
                <div><img src={ImgGal4} alt="" /></div>
                
            </div>

            <div>
                <div><img src={ImgGal2} alt="" /></div>
                <div><img src={Img20} alt="" /></div>
                <div><img src={Img23} alt="" /></div>
                <div><img src={ImgGal5} alt="" /></div>
            </div>

            <div>
                <div><img src={Img21} alt="" /></div>
                <div><img src={ImgGal3} alt="" /></div>
                <div><img src={ImgGal8} alt="" /></div>
                
            </div>
        </div>



        <Footer />
        </>
    )
}

export default Home