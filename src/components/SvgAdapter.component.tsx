//https://www.svgrepo.com/collection/uxwb-bold-line-icons/

import { useEffect } from "react";
import CleanCode from "../assets/svgs/cleancode";
import Portada from "../assets/svgs/portada";

type sliderIcon = 'portada'|'presentación'|'experiencia'|'trabajos'|'contacto' ;
type svgCase = 'iconoportada'|sliderIcon
interface svgadapterprops { stylestring:string , svgCase:svgCase , mainColor?:string , secondColor?:string , isActive?:boolean , index?:any }
const SvgAdapter = ({stylestring,index,mainColor,secondColor,isActive,svgCase}:svgadapterprops) => {

    const onClickIconifSlider = (index:number) => {
        const routeList:string[] = ['R1','R2','R3','R4','R5','R6'];
        window.location.href = `#${routeList[index]}`;
        let uri = window.location.toString();
        if(uri.indexOf('#') > 0){window.history.replaceState({},document.title,uri.substring(0,uri.indexOf('#')))};
    }

    const isActiveColorModificator = (isActive) ? mainColor : `${mainColor}50`;

    useEffect(() => {if(isActive){console.log(index)}},[])
    
    const SvgRender = () => {
        switch(svgCase){
            case 'iconoportada' : return <CleanCode stylestring={stylestring} mainColor={mainColor}/> ;
            case 'portada'      : return <Portada stylestring={stylestring} mainColor={isActiveColorModificator} onClickCallback={() => onClickIconifSlider(index)}/>
            default : return <></> ;
        }
    }

    return <SvgRender/> ;

}

export default SvgAdapter

