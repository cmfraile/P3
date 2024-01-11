import '../styles/pages/trabajos.sass'
import TrabajoCard from '../components/cards/trabajo.card';
import Trabajos from '../assets/svgs/trabajos.svg';

import { trabajos } from '../misc/data';
import { useState } from 'react';

const VerMas = () => {

}

const RootTrabajos = () => {

    const [ more , setMore ] = useState(false);

    return(
        <div className="root_component root_trabajos" id='R3'>
            <h2>Trabajos</h2>
            <div className="trabajosList animate__animated animate__fadeIn">
                {trabajos
                .sort( (a,b) => a.customIndex - b.customIndex)
                .map( (x,i) => <TrabajoCard     key={i} 
                                                foto={x.foto} 
                                                nombre={x.nombre} 
                                                estado={x.estado}
                                                descripcion={x.descripcion} 
                                                despliegueURL={x.despliegueURL} repoURL={x.repoURL}
                                                side={x.side} customIndex={x.customIndex}/>)
                .slice(0,4)
                }
            </div>
            <Trabajos stylestring='placeholder' mainColor='#2C3E50'/>
        </div>
    )

}

export default RootTrabajos