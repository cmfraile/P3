import { useState } from "react";

interface childHeightsAndScroll {menuChilds:{[key:string]:number},scroll:number};
const sliderHook = () => {

    const [
        clientDimensionYStateObject,
        setClientDimensionYStateObject
    ] = useState<childHeightsAndScroll|undefined>(undefined);

    const clientDimensionYState = (menuChildsAndScroll:[string[],string]):childHeightsAndScroll => {
        let caso:childHeightsAndScroll = {menuChilds:{},scroll:0};
        menuChildsAndScroll[0].map(x => caso.menuChilds[x] = document.getElementById(x)?.clientHeight || 0);
        caso.scroll = document.getElementById(menuChildsAndScroll[1])?.scrollTop || 0;
        return caso;
    }

    const [ menuLED , setmenuLED ] = useState<number>(0);

    const setLED = (currentScrollPosition:number) => {
        
        if(!clientDimensionYStateObject){return}
        let cuts:number[] = [] ; const { menuChilds } = clientDimensionYStateObject
        Object.keys(menuChilds).map((x,i) => {cuts.push(menuChilds[x] + cuts[i-1]|0)});
        const getMenuLED = () => {
            let menuLED = 0;
            cuts.map(x => {if((currentScrollPosition+50) > x){menuLED++}});
            return menuLED;
        };
        
        //Arreglo provisional
        cuts.shift() ; cuts.pop() ;
        
        setClientDimensionYStateObject((v:any) => ({...v,scroll:currentScrollPosition}));
        const menuLedReturn = getMenuLED() ; if(menuLedReturn !== menuLED){setmenuLED(menuLedReturn)};
    };

    return({
        setLED,
        menuLED,
        clientDimensionYState,
        setClientDimensionYStateObject,
    });

}

export default sliderHook