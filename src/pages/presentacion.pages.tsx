import '../styles/pages/presentacion.sass';
import SkillDataviz, { Legend } from '../components/SkillDataviz.component';
import { presentacion } from '../misc/data';

const RootPresentacion = () => {

    return(
        <div className="root_component root_presentacion" id='R2'>
            <h2>Sobre mi</h2>
            <div className="about"><p>
                {presentacion}
            </p></div>
            <div className="skills" style={{transform:"rotate(90deg)"}}>
                <SkillDataviz/>
            </div>
            <Legend/>
        </div>
    )
}

export default RootPresentacion