
import { ExperienciaCard } from '../components/cards/experiencia.card';
import { experiencia } from '../misc/data';
import '../styles/pages/experiencia.sass';
import { sideMargin } from './formacion.pages';

const RootExperiencia = () => {

    return(
        <div className="root_component root_experiencia" id='R4'>
            <h2>Experiencia profesional:</h2>
            <div className="experienceList">
                {experiencia
                .sort( (a,b) => a.customIndex - b.customIndex)
                .map( (x,i,a) => (
                    <ExperienciaCard key={i}
                    puesto={x.puesto} inicio={x.inicio} periodo={x.periodo} lugar={x.lugar} descripcion={x.descripcion} side={x.side}
                    customIndex={x.customIndex} isFirstSide={sideMargin({x,i,a})}/>
                ))}
            </div>
        </div>
    )
}

export default RootExperiencia