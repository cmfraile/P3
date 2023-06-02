
export interface trabajoProps { foto:string , nombre:string , estado:string , descripcion:string , side:boolean , customIndex:number , despliegueURL?:string , repoURL?:string }
interface trabajoInView extends trabajoProps { isFirstSide:string }
const TrabajoCard = ({foto,nombre,estado,descripcion,side,isFirstSide,despliegueURL,repoURL}:trabajoInView) => {

    const onClickCallback = () => {
        console.log('CLICK')
    }

    return(
        <div className={`trabajoCard ${(isFirstSide) ? 'firstSideMargin' : ''}`}>
            <div className="foto" style={{backgroundImage: `url(${foto})`}}/>
            <p className="nombre">{nombre}</p>
            <p className="estado">{estado}</p>
            <p className="descripcion">{descripcion}</p>
            <div className="despliegues">
                {(repoURL) && <p onClick={onClickCallback}className="webURL">Enlace al repo</p>}
                {(despliegueURL) && <p onClick={onClickCallback}className="webURL">Enlace al despliegue</p>}
            </div>
        </div>
    )
}

//style="background-image: url({{curro.foto}});"