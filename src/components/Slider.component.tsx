import '../styles/slider.sass';
import SvgAdapter from './SvgAdapter.component';

const Slider = () => {

    const mainColor:string = '#2C3E50' ;
    const svgArray = ['portada','presentación','formacion','experiencia','trabajos','contacto'];

    return(
        <div className="slider animate__animated animate__backInLeft animate__slower">
            {svgArray.map( (x,i) => (
                <SvgAdapter     stylestring={`slide ${(i==0) ? 'hide':''}`} 
                                mainColor={mainColor} 
                                index={i}
                                key={i} 
                                svgCase={x}/>
            ))}
        </div>
    )

}

export default Slider