import { useContext, useEffect } from 'react';
import { mainContext } from '../context/main.context';
import '../styles/slider.sass';

const Slide = ({isActive,onClickCallback}:{isActive:boolean,onClickCallback:() => void}) => <svg 
    fill={(isActive) ? '#000000' : '#c7c7c7'}
    onClick={onClickCallback}
    style={{cursor:'pointer',transition:'all 0.5s ease'}}
className='slide' viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 0l8 8-8 8-8-8V0h8zM7 2H2v5l6 6 5-5-6-6zM4.5 3C5.328 3 6 3.666 6 4.5 6 5.328 5.334 6 4.5 6 3.672 6 3 5.334 3 4.5 3 3.672 3.666 3 4.5 3z" fillRule="evenodd"></path> </g></svg>

const Slider = () => {

    const { menuLED } = useContext(mainContext).sliderHook ;

    const onClickIcon = (index:number) => {
        const routeList:string[] = ['R1','R2','R3','R4','R5'];
        window.location.href = `#${routeList[index]}`;
        let uri = window.location.toString();
        if(uri.indexOf('#') > 0){window.history.replaceState({},document.title,uri.substring(0,uri.indexOf('#')))};
    }

    return(
        <div className="slider">
            <Slide isActive={menuLED == 0} onClickCallback={() => onClickIcon(0)} />
            <Slide isActive={menuLED == 1} onClickCallback={() => onClickIcon(1)} />
            <Slide isActive={menuLED == 2} onClickCallback={() => onClickIcon(2)} />
            <Slide isActive={menuLED == 3} onClickCallback={() => onClickIcon(3)} />
            <Slide isActive={menuLED == 4} onClickCallback={() => onClickIcon(4)} />
        </div>
    )

}

export default Slider