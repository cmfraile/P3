import Slider from "../components/Slider.component";

const MainLayout = ({children}:any) => {

    return(
        <div className="root">
          <Slider/>
          <div className="content">{children}</div>
        </div>
    )
    
}

export default MainLayout