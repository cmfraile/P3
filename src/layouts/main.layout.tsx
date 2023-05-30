import Slider from "../components/Slider.component";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useContext } from "react";
import { mainContext } from "../context/main.context";
const menuChildsAndScroll:[string[],string] = [['R1','R2','R3','R4','R5'],'bodyRow'];

const MainLayout = ({children}:any) => {

    const scrollCR = useRef<HTMLDivElement>((<div/>).type);
    const { menuLED , 
            clientDimensionYState , setClientDimensionYStateObject } = useContext(mainContext).sliderHook ;

    
    useLayoutEffect(() => setClientDimensionYStateObject(clientDimensionYState(menuChildsAndScroll)),[]);
    useEffect(() => console.log(scrollCR.current.scrollTop),[scrollCR.current.scrollTop])

    return(
        <div className="root" id="bodyRow">
          <Slider/>
          <div className="content" ref={scrollCR}>{children}</div>
        </div>
    )
    
}

export default MainLayout