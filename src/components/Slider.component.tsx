import { useContext, useEffect, useLayoutEffect } from 'react';
import { mainContext } from '../context/main.context';
import '../styles/slider.sass';
import SvgAdapter from './SvgAdapter.component';

const Slider = () => {

    const { menuLED } = useContext(mainContext).sliderHook ;

    useEffect(() => {},[menuLED])

    return(
        <div className="slider animate__animated animate__backInLeft animate__slower">
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={0} isActive={menuLED == 0} svgCase='portada'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={1} isActive={menuLED == 1} svgCase='portada'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={2} isActive={menuLED == 2} svgCase='portada'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={3} isActive={menuLED == 3} svgCase='portada'/>
            <SvgAdapter stylestring='slide' mainColor='#2C3E50' index={4} isActive={menuLED == 4} svgCase='portada'/>
        </div>
    )

}

export default Slider