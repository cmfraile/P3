import '../styles/pages/presentacion.sass';
import SkillDataviz, { Legend } from '../components/SkillDataviz.component';
import { presentacion } from '../misc/data';
import LinkIcon from '../components/linkIcon.component';

const RootPresentacion = () => {

    return(
        <div className="root_component root_presentacion" id='R2'>
            <h2>Sobre mi</h2>
            <div className="about">
                <p>{presentacion}</p>
                <div className="rrss">
                    <h5>Mis redes:</h5>
                    <LinkIcon svgCase='github' url='https://github.com/cmfraile'/>
                    <LinkIcon svgCase='linkedIn' url='https://www.linkedin.com/in/cmfraile/'/>
                    <LinkIcon svgCase='instagram' url='https://www.instagram.com/cmfraile/'/>
                </div>
            </div>
            <div className="skills" style={{transform:"rotate(90deg)"}}>
                <SkillDataviz/>
            </div>
            <Legend/>
        </div>
    )
}

export default RootPresentacion