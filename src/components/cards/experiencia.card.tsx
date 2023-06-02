
export interface experienciaProps { puesto:string , inicio:number , periodo:string|number , lugar:string , descripcion:string , side:boolean , customIndex:number }
interface experienceInView extends experienciaProps { isFirstSide:boolean }

export const ExperienciaCard = ({puesto,inicio,periodo,lugar,descripcion,isFirstSide}:experienceInView) => {

    return(
        <div className={`experienceCard ${(isFirstSide) ? 'firstSideMargin' : ''}`}>
            <p className="puesto">{puesto}</p>
            <p className="inicio">{inicio}</p>
            <p className="periodo">{periodo}</p>
            <p className="lugar">{lugar}</p>
            <p className="descripcion">{descripcion}</p>
        </div>
    )

}