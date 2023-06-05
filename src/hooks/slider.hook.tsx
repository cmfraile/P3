import { useEffect, useLayoutEffect, useState } from "react";

const sliderHook = () => {

    const [ scrollY , setScrollY ] = useState<number>(window.scrollY) ;
    const [ menuLED , setmenuLED ] = useState<number>(0) ;
    const [
        clientDimensionYStateObject,
        setClientDimensionYStateObject
    ] = useState<{[key:string]:number}|undefined>(undefined);

    /*
    const setLED = (currentScrollPosition:number) => {
        
        if(!clientDimensionYStateObject){return}
        let cuts:number[] = [];
        Object.keys(clientDimensionYStateObject)
        .filter(x => x !== 'scroll')
        .map((x,i) => {cuts.push(clientDimensionYStateObject[x] + cuts[i-1]|0)});
        const getMenuLED = () => {
            let menuLED = 0;
            cuts.map(x => {if((currentScrollPosition+75) > x){menuLED++}});
            return menuLED;
        };
        
        
        //cuts.shift();
        //cuts.pop();
        

        setClientDimensionYStateObject((v:any) => ({...v,scroll:currentScrollPosition}));
        const menuLedReturn = getMenuLED() ; if(menuLedReturn !== menuLED){setmenuLED(menuLedReturn)};

    };
    */


    const setLED = (currentScrollPosition:number) => {

        if(!clientDimensionYStateObject){ return } ;
        setClientDimensionYStateObject((v:any) => ({...v,scroll:currentScrollPosition})) ;

        let cuts1 = Object.keys(clientDimensionYStateObject).filter(x => x !== 'scroll').sort()
        .map(x => clientDimensionYStateObject[x]);

        cuts1 = cuts1.map((x,i,a) => (a.slice(0,i).reduce((a,b) => a+b,0)));

        const leds:boolean[] = [];
        cuts1.forEach( x => (scrollY > x) ? leds.push(true) : leds.push(false) );

        if( leds.filter(x => !x).length !== 0 ){
            if( leds.indexOf(false)-1 !== menuLED ){ setmenuLED(v => leds.indexOf(false)-1) };
        }else{
            if(leds.length !== menuLED){ setmenuLED(v => leds.length-1) }
        }
        

    }

    const effectsBundle = (menuChilds:string[],fetchDeps?:any[]) => {

        const clientDimensionYState = (menuChildsAndScroll:string[]):typeof clientDimensionYStateObject => {
            let caso:{[key:string]:number} = {};
            menuChildsAndScroll.map(x => caso[x] = document.getElementById(x)?.clientHeight || 0);
            return caso;
        }

        useLayoutEffect(() => setClientDimensionYStateObject(v => clientDimensionYState(menuChilds)),
            (fetchDeps) ? [...fetchDeps] : []
        );
        
        useEffect(() => {
            const callback = () => setScrollY(v => { setLED(v) ; return window.scrollY }) ;
            window.addEventListener('scroll',callback);
            return () => window.removeEventListener('scroll',callback);
        },[scrollY]);

        //useEffect(() => {console.clear() ; console.log(scrollY)},[scrollY])

        useEffect(() => window.scroll(0,0),[])

    }

    return({menuLED,effectsBundle});

};

export default sliderHook