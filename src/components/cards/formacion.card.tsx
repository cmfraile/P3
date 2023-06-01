
export interface formationProps { materia:string , periodo:string , entidad:string , side:boolean }
interface formationInView extends formationProps { isFirstSide:boolean }
const FormationCard = ({materia,periodo,entidad,isFirstSide}:formationInView) => {

    return(
        <div className={`formationCard ${(isFirstSide) ? 'firstSideMargin' : ''}`}>
            <p className="materia">{materia}</p>
            <p className="periodo">{periodo}</p>
            <p className="entidad">{entidad}</p>
        </div>
    );

}

export default FormationCard