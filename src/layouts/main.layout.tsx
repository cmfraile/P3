import Slider from "../components/Slider.component";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useContext } from "react";
import { mainContext } from "../context/main.context";
const menuChilds:string[] = ['R1','R2','R3','R4','R5'];

const MainLayout = ({children}:any) => {

    const { effectsBundle } = useContext(mainContext).sliderHook ;

    effectsBundle(menuChilds)

    return(
        <div className="root">
          <Slider/>
          <div className="content">{children}</div>
        </div>
    )
    
}

export default MainLayout