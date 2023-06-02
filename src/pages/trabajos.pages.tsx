import '../styles/pages/trabajos.sass';
import TrabajoCard from '../components/cards/trabajo.card';
import Trabajos from '../assets/svgs/trabajos.svg';

import { trabajos } from '../misc/data';

const RootTrabajos = () => {

    return(
        <div className="root_component root_trabajos" id='R5'>
            <h2>Trabajos</h2>
            <div className="trabajosList">
                {trabajos
                .sort( (a,b) => a.customIndex - b.customIndex)
                .map( (x,i) => <TrabajoCard key={i} foto={x.foto} nombre={x.nombre} estado={x.estado} descripcion={x.descripcion} despliegueURL={x.despliegueURL} repoURL={x.repoURL}
                                            side={x.side} customIndex={x.customIndex}/>)
                }
            </div>
        </div>
    )

}

export default RootTrabajos