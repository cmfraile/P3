import FormationCard, { formationProps } from '../components/cards/formacion.card'
import { formacion } from '../misc/data'
import '../styles/pages/formacion.sass'

const RootFormación = () => {

    const sideMargin = ({x,a,i}:{x:formationProps,a:formationProps[],i:number}):boolean => {
        if(!x.side){return false};
        if(!a[i-1].side && x.side){return true};
        return false;
    }

    return(<div className="root_component root_formacion" id='R3'>
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
    </div>)

}

export default RootFormación