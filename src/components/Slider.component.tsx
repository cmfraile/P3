import { useContext } from 'react';
import { mainContext } from '../context/main.context';
import '../styles/slider.sass';

const Slider = () => {

    const { menuLED } = useContext(mainContext).sliderHook ;

    const onClickIcon = (index:number) => {
        const routeList:string[] = ['R1','R2','R3','R4','R5'];
        window.location.href = `#${routeList[index]}`;
        let uri = window.location.toString();
        if(uri.indexOf('#') > 0){window.history.replaceState({},document.title,uri.substring(0,uri.indexOf('#')))};
    }

    return(
        <div className="slider animate__animated animate__backInLeft animate__slower">
            <img src='src/assets/icons/me.png' className='slider' onClick={() => onClickIcon(0)} />
            <img src='src/assets/icons/me.png' className='slider' onClick={() => onClickIcon(1)} />
            <img src='src/assets/icons/me.png' className='slider' onClick={() => onClickIcon(2)} />
            <img src='src/assets/icons/me.png' className='slider' onClick={() => onClickIcon(3)} />
            <img src='src/assets/icons/me.png' className='slider' onClick={() => onClickIcon(4)} />
        </div>
    )

}

export default Slider