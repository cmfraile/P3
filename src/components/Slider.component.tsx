import { useContext, useEffect } from 'react';
import { mainContext } from '../context/main.context';
import '../styles/slider.sass';

const Slide = ({isActive}:{isActive:boolean}) => <svg fill={(isActive) ? '#000000' : '#c7c7c7'}
className='slide' viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 0l8 8-8 8-8-8V0h8zM7 2H2v5l6 6 5-5-6-6zM4.5 3C5.328 3 6 3.666 6 4.5 6 5.328 5.334 6 4.5 6 3.672 6 3 5.334 3 4.5 3 3.672 3.666 3 4.5 3z" fillRule="evenodd"></path> </g></svg>

const Slider = () => {

    const { menuLED } = useContext(mainContext).sliderHook ;

    return(
        <div className="slider">
            <Slide isActive={true}/>
            <Slide isActive={true}/>
            <Slide isActive={true}/>
            <Slide isActive={true}/>
            <Slide isActive={true}/>
        </div>
    )

}

export default Slider