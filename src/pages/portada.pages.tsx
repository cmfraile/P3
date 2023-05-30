//const RootPortada = () => <div className="root_component" id='R1'><h2>Portada</h2></div>
//https://www.svgrepo.com/collection/uxwb-bold-line-icons/
import CleanCode from '../assets/svgs/cleancode'

import '../styles/pages/portada.sass'
const RootPortada = () => {

    return(
        <div className="root_component root_portada" id="R1">
            <CleanCode stylestring="cleanCode_icon animate__animated animate__fadeIn animate__slow animate__delay-3s"/>
            <h1 className='animate__animated animate__flipInX animate__slow'>Carlos Manuel Fraile Gómez</h1>
            <h5 className='animate__animated animate__flipInX animate__slow animate__delay-1s'> - Desarrollador Multistack y técnico informático - </h5>
        </div>
    )

}

export default RootPortada