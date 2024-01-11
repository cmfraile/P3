import CleanCode from '../assets/svgs/cleancode.svg';
import '../styles/pages/portada.sass';

import { nombreYOficio } from '../misc/data';

const RootPortada = () => {

    return(
        <div className="root_component root_portada" id="R1">
            <CleanCode  stylestring="cleanCode_icon animate__animated animate__fadeIn animate__slow animate__delay-3s" 
                        mainColor='#2C3E50'/>
            <h1 className='animate__animated animate__flipInX animate__slow'>{nombreYOficio[0]}</h1>
            <h5 className='animate__animated animate__flipInX animate__slow animate__delay-1s'>{nombreYOficio[1]}</h5>
        </div>
    )

}

export default RootPortada