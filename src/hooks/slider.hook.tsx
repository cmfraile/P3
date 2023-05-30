import { useEffect, useLayoutEffect, useState } from "react";

const sliderHook = () => {

    const [
        clientDimensionYStateObject,
        setClientDimensionYStateObject
    ] = useState<{[key:string]:number}|undefined>(undefined);

    const clientDimensionYState = (menuChildsAndScroll:string[]):typeof clientDimensionYStateObject => {
        let caso:{[key:string]:number} = {};
        menuChildsAndScroll.map(x => caso[x] = document.getElementById(x)?.clientHeight || 0);
        return caso;
    }

    const [ menuLED , setmenuLED ] = useState<number>(0);

    const setLED = (currentScrollPosition:number) => {
        
        if(!clientDimensionYStateObject){return}
        let cuts:number[] = [];
        Object.keys(clientDimensionYStateObject).map((x,i) => {cuts.push(clientDimensionYStateObject[x] + cuts[i-1]|0)});
        const getMenuLED = () => {
            let menuLED = 0;
            cuts.map(x => {if((currentScrollPosition+75) > x){menuLED++}});
            return menuLED;
        };
        
        //Arreglo provisional
        cuts.shift() ; cuts.pop() ;

        setClientDimensionYStateObject((v:any) => ({...v,scroll:currentScrollPosition}));
        const menuLedReturn = getMenuLED() ; if(menuLedReturn !== menuLED){setmenuLED(menuLedReturn)};
    };

    const effectsBundle = (menuChilds:string[],fetchDeps?:any[]) => {

        useLayoutEffect(() => setClientDimensionYStateObject(clientDimensionYState(menuChilds)),
            (fetchDeps) ? [...fetchDeps] : []
        );
        
        useEffect(() => {
            const callback = () => setLED(window.scrollY) ;
            window.addEventListener('scroll',callback);
            return () => window.removeEventListener('scroll',callback);
        },[window.scrollY]);

    }

    return({menuLED,effectsBundle});

};

export default sliderHook