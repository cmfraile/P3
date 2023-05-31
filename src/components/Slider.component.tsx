import '../styles/slider.sass';
import SvgAdapter from './SvgAdapter.component';

const Slider = () => {

    return(
        <div className="slider animate__animated animate__backInLeft animate__slower">
            <SvgAdapter stylestring='slide hide' mainColor='#2C3E50' index={0} svgCase='portada'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={1} svgCase='presentación'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={2} svgCase='formacion'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={3} svgCase='experiencia'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={4} svgCase='trabajos'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={5} svgCase='contacto'/>
        </div>
    )

}

export default Slider