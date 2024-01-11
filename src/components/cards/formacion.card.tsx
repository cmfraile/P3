import { CSSProperties } from "react";

export interface formationProps { materia:string , periodo:string , entidad:string , side:boolean }
interface formationInView extends formationProps { isFirstSide:boolean }
const FormationCard = ({materia,periodo,entidad,isFirstSide}:formationInView) => {

    const textAlignStyle = ():CSSProperties => {
        let style:CSSProperties = { textAlign:undefined } ;
        (materia.length < 100)
            ? style.textAlign = 'center'
            : style.textAlign = 'justify'
        return style
    }

    return(
        <div className={`formationCard ${(isFirstSide) ? 'firstSideMargin' : ''}`}>
            <p  className="materia" style={textAlignStyle()}>{materia}</p>
            <p className="periodo">{periodo}</p>
            <p className="entidad">{entidad}</p>
        </div>
    );

}

export default FormationCard