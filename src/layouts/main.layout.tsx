import { useContext, useEffect } from "react";
import Slider from "../components/Slider.component";
import { mainContext } from "../context/main.context";

const MainLayout = ({children}:any) => {

  const { effectsBundle } = useContext(mainContext).sliderHook;
  effectsBundle(['R1','R2','R3','R4','R5','R6']);

  return(
      <div className="root">
        <Slider/>
        <div className="content">{children}</div>
      </div>
  )
    
}

export default MainLayout