import Formacion from '../assets/svgs/formacion.svg';
import FormationCard, { formationProps } from '../components/cards/formacion.card';
import { formacion , datosDeInteres } from '../misc/data';

import '../styles/pages/formacion.sass'

export const sideMargin = ({x,a,i}:{x:any,a:any[],i:number}):boolean => {
    if(!x.side){return false};
    if(!a[i-1].side && x.side){return true};
    return false;
}

const RootFormación = () => {

    return(
    <div className="root_component root_formacion" id='R5'>
        <h2>Formación académica</h2>
        <div className="formationList">
            {formacion
            .sort( (a,b) => {

                const periodToScore = ({periodo}:formationProps) => {

                    if(periodo.length <= 6){
                        return periodo.split('-').map(x => parseInt(x.trim()))[0] * 2 ;
                    }

                    if(periodo.length >= 6){
                        return periodo
                        .split('-')
                        .map(x => parseInt(x.trim()))
                        .map(x => (Number.isNaN(x)) ? 5000 : x)
                        .reduce((a,b) => (a+b),0)
                    }

                    return 0

                }

                return periodToScore(b) - periodToScore(a)

            })
            .sort( (a,b) => {
                const boolToInt = ({side}:formationProps) => (side) ? 1 : -1 ; return boolToInt(a) - boolToInt(b) ;
            })
            .map((x,i,a) => (
                <FormationCard 
                key={i} materia={x.materia} periodo={x.periodo} entidad={x.entidad} side={x.side} isFirstSide={sideMargin({x,i,a})}/>
            ))}
        </div>
        <div className="interestDataAndPlaceholder">
            <h5>datos de interés</h5>
            <div className="dataOfInterest">
                {datosDeInteres.map( (x,i) => (<p key={i} className='data'>{x}</p>))}
            </div>
            <Formacion stylestring='placeholder' mainColor='#2C3E50'/>
        </div>
    </div>
    )

}

export default RootFormación