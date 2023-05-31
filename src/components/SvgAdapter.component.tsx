//https://www.svgrepo.com/collection/uxwb-bold-line-icons/
import Portada from "../assets/svgs/portada.svg";
import Presentacion from "../assets/svgs/presentacion.svg";
import Formacion from "../assets/svgs/formacion.svg";
import Experiencia from "../assets/svgs/experiencia.svg";
import Trabajos from "../assets/svgs/trabajos.svg";
import Contacto from "../assets/svgs/contacto.svg";

import { useContext } from "react";
import { mainContext } from "../context/main.context";

type sliderIcon = 'portada'|'presentación'|'formacion'|'experiencia'|'trabajos'|'contacto' ;
interface svgadapterprops { stylestring:string , svgCase:string , mainColor?:string , index?:any }
const SvgAdapter = ({stylestring,index,mainColor,svgCase}:svgadapterprops) => {

    const onClickIconifSlider = (index:number) => {
        const routeList:string[] = ['R1','R2','R3','R4','R5','R6'];
        window.location.href = `#${routeList[index]}`;
        let uri = window.location.toString();
        if(uri.indexOf('#') > 0){window.history.replaceState({},document.title,uri.substring(0,uri.indexOf('#')))};
    }

    const { menuLED } = useContext(mainContext).sliderHook;
    const stylestringWithActive = (menuLED == index) ? `active ${stylestring}` : stylestring ;
    
    const SvgRender = () => {
        switch(svgCase){
            case 'portada'      : return <Portada stylestring={stylestringWithActive} mainColor={mainColor} onClickCallback={() => onClickIconifSlider(index)}/>
            case 'presentación' : return <Presentacion stylestring={stylestringWithActive} mainColor={mainColor} onClickCallback={() => onClickIconifSlider(index)}/>
            case 'formacion'    : return <Formacion stylestring={stylestringWithActive} mainColor={mainColor} onClickCallback={() => onClickIconifSlider(index)}/>
            case 'experiencia'  : return <Experiencia stylestring={stylestringWithActive} mainColor={mainColor} onClickCallback={() => onClickIconifSlider(index)}/>
            case 'trabajos'     : return <Trabajos stylestring={stylestringWithActive} mainColor={mainColor} onClickCallback={() => onClickIconifSlider(index)}/>
            case 'contacto'     : return <Contacto stylestring={stylestringWithActive} mainColor={mainColor} onClickCallback={() => onClickIconifSlider(index)} />
            default : return <></> ;
        }
    }

    return <SvgRender/> ;

}

export default SvgAdapter

