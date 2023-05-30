import { useRef } from "react";
import Slider from "../components/Slider.component";

const MainLayout = ({children}:any) => {

    const scrollCR = useRef<HTMLDivElement>((<div/>).type);

    return(
        <div className="root" id="bodyRow">
          <Slider/>
          <div className="content" ref={scrollCR}>{children}</div>
        </div>
    )
    
}

export default MainLayout