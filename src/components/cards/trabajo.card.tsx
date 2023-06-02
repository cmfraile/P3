import LinkIcon from "../linkIcon.component"

export interface trabajoProps { foto:string , nombre:string , estado:string , descripcion:string , side:boolean , customIndex:number , despliegueURL?:string , repoURL?:string }
const TrabajoCard = ({foto,nombre,estado,descripcion,despliegueURL,side,repoURL}:trabajoProps) => {

    return(
        <div className='trabajocard'>
            <div className="foto bgReset" style={{backgroundImage: `url(${foto})`}}/>
            <div className="workData">
                <p className="nombre">{nombre}</p>
                <p className="estado">{estado}</p>
                <p className="descripcion">{descripcion}</p>
                <div className="despliegues">
                    {(repoURL) && <LinkIcon svgCase='github' url={repoURL}/>}
                    {(despliegueURL) && <LinkIcon svgCase='deploy' url={despliegueURL}/>}
                </div>
            </div>
        </div>
    )
    
}

export default TrabajoCard