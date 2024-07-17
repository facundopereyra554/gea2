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
                <div className='hidro-imgs'>
                    <img src="../assets/img2.jpg" alt="" />
                    <div className='hidro-imgs-column'>
                        <img src="../assets/img5.jpg" alt="" />
                        <img src="../assets/img6.jpg" alt="" />
                    </div>
                    
                </div>
            </div>


            <h3 className='main-sections-title main-sections-title-long'><FormattedMessage id="sevMethod" /></h3>
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