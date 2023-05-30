import { useEffect, useRef } from "react";
import Slider from "../components/Slider.component";

const MainLayout = ({children}:any) => {

    const scrollCR = useRef<HTMLDivElement>((<div/>).type);

    useEffect(() => {
      const callback = () => {console.log(window.scrollY)};
      window.addEventListener('scroll',callback);
      return () => window.removeEventListener('scroll',callback);
    })

    return(
        <div className="root" id="bodyRow">
          <Slider/>
          <div className="content" ref={scrollCR}>{children}</div>
        </div>
    )
    
}

export default MainLayout