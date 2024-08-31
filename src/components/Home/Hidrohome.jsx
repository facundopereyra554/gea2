import '../Hidro/Hidro.css'
import {FormattedMessage} from 'react-intl';
function Hidrohome() {
    return (
        <>
        <div className='hidro-container container' style={{marginTop: '140px'}}>
            <h3 className='main-sections-title main-sections-title-long pcview'><FormattedMessage id="hydrogeology" /></h3>
            <h3 className='main-sections-title main-sections-title-long celview'>HIDRO- GEOLOGÍA</h3>
            <p className='main-sections-description'>
                <FormattedMessage id="hydrology.miningAndAgriculture" />
            </p>

            <div className='hidro-info'>
                <div>
                    <ul className='list-texts'>
                        <li><span><FormattedMessage id="prefeasibility" /></span></li>
                        <li><span><FormattedMessage id="gisAnalysis" /></span></li>
                        <li><span><FormattedMessage id="explorationAuthorizations" /></span></li>
                        <li><span><FormattedMessage id="explorationPrograms" /></span></li>
                        <li><span><FormattedMessage id="hydrogeologicalCharacterization" /></span></li>
                        <li><span><FormattedMessage id="waterBalanceStudies" /></span></li>
                        <li><span><FormattedMessage id="drillingPrograms" /></span></li>
                        <li><span><FormattedMessage id="dataCollectionPrograms" /></span></li>
                        <li><span><FormattedMessage id="wellTechnicalDirection" /></span></li>
                        <li><span><FormattedMessage id="pumpingTests" /></span></li>
                        <li><span><FormattedMessage id="aquiferEvaluation" /></span></li>
                        <li><span><FormattedMessage id="wellFieldDesign" /></span></li>
                        <li><span><FormattedMessage id="monitoringSystem" /></span></li>
                        <li><span><FormattedMessage id="conceptualModel" /></span></li>
                        <li><span><FormattedMessage id="monitoringProgram" /></span></li>
                    </ul>
                </div>
                <div className="image-grid-wrapper">
                    <div className="image-grid">
                        <div className="top-row">
                            <div className="image-container">
                                <img src="../src/assets/img2.jpg" alt="Image 1"/>
                            </div>
                            <div className="image-container">
                                <img src="../src/assets/img6.jpg" alt="Image 2"/>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <div className="image-container">
                                <img src="../src/assets/imgNew.jpg" alt="Image 3"/>
                            </div>
                            <div className="image-container">
                                <img src="../src/assets/imgHidro1.jpg" alt="Image 4"/>
                            </div>
                            <div className="image-container">
                                <img src="../src/assets/img5.jpg" alt="Image 5"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <h3 id='sev' className='main-sections-title main-sections-title-long'><FormattedMessage id="sevMethod" /></h3>
            <p className='main-sections-description'>
                <FormattedMessage id="sevAbbreviation" /> 
            </p>


            <div className='hidro-info'>
                <div className='sondeo_padd'>
                    <ul className='list-texts'>
                        <li><span><FormattedMessage id="sevDescription" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.electricalProperties" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.unsaturatedThickness" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.saturatedThickness" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.aquiferInterfaces" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.wellDepthProjection" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.tentativeDesign" /></span></li>

                        <li><span><FormattedMessage id="sevBenefits.geoElectricalSections" /></span></li>
                    </ul>
                </div>

                <div className='hidro-imgs'>
                    <img src="../src/assets/graph.jpg" alt="" />
                    <div className='hidro-imgs-column'>
                        <img src="../src/assets/img4.jpg" alt="" />
                        <img src="../src/assets/imgsev1.jpg" alt="" />
                    </div>
                </div>




                {/* <div className='hidro-imgs-column2 restrict'>
                <div className='imgGEOp'>
                    <div style={{marginTop: '70px'}}>
                        <div><img  src="../src/assets/img4.jpg" alt="" /></div>
                        <div><img  src="../src/assets/graph.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="../src/assets/imgsev1.jpg" alt="" /></div>
                        <div><img src="../src/assets/imgsev2.jpg" alt="" /></div>
                    </div>

                </div>
                </div> */}
            </div>

        </div>  
        </>
    )
}

export default Hidrohome