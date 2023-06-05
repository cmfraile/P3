import { useEffect, useLayoutEffect, useState } from "react";

const sliderHook = () => {

    const [ scrollY , setScrollY ] = useState<number>(window.scrollY) ;
    const [ menuLED , setmenuLED ] = useState<number>(0) ;
    const [
        clientDimensionYStateObject,
        setClientDimensionYStateObject
    ] = useState<{[key:string]:number}|undefined>(undefined);

    const setLED = (currentScrollPosition:number) => {
        
        if(!clientDimensionYStateObject){return}
        let cuts:number[] = [];
        Object.keys(clientDimensionYStateObject).map((x,i) => {cuts.push(clientDimensionYStateObject[x] + cuts[i-1]|0)});
        const getMenuLED = () => {
            let menuLED = 0;
            cuts.map(x => {if((currentScrollPosition+50) > x){menuLED++}});
            return menuLED;
        };
        
        //Arreglo provisional
        //cuts.shift();
        //cuts.pop();

        setClientDimensionYStateObject((v:any) => ({...v,scroll:currentScrollPosition}));
        const menuLedReturn = getMenuLED() ; if(menuLedReturn !== menuLED){setmenuLED(menuLedReturn)};
    };

    const effectsBundle = (menuChilds:string[],fetchDeps?:any[]) => {

        const clientDimensionYState = (menuChildsAndScroll:string[]):typeof clientDimensionYStateObject => {
            let caso:{[key:string]:number} = {};
            menuChildsAndScroll.map(x => caso[x] = document.getElementById(x)?.clientHeight || 0);
            return caso;
        }

        useLayoutEffect(() => setClientDimensionYStateObject(clientDimensionYState(menuChilds)),
            (fetchDeps) ? [...fetchDeps] : []
        );
        
        useEffect(() => {
            const callback = () => setScrollY(v => { setLED(v) ; return window.scrollY }) ;
            window.addEventListener('scroll',callback);
            return () => window.removeEventListener('scroll',callback);
        },[scrollY]);

        useEffect(() => window.scroll(0,0),[])

    }

    return({menuLED,effectsBundle});

};

export default sliderHook