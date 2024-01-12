import { workBook } from "../pages/trabajos.pages";

interface circleAndVoidProps { index:number , fn:() => boolean };

const Circle = ( {index,fn}:circleAndVoidProps ) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="button" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
        </svg>
    )
    
}

const Void = ( {index,fn}:circleAndVoidProps ) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg"
            style={{cursor:'pointer'}}
            className="button" 
            viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>
    )

}

interface arrowProps {pointsToTheRight:boolean,scroll:() => void}
const Arrow = ({pointsToTheRight,scroll}:arrowProps) => {

    const onClick = () => {
        
        scroll()
    }

    return (
        <svg
            onClick={onClick}
            style={{transform:(pointsToTheRight) ? 'rotate(180deg)' : ''}}
            xmlns="http://www.w3.org/2000/svg" 
            className="arrow" 
            viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
    )

}

interface workScrollProps { 
    workBook:workBook , 
    left:() => boolean , right:() => boolean , button:(index:number,newIndex:number) => boolean
}
const WorkScroll = ({workBook,left,right,button}:workScrollProps) => {

    return (
        <div className="workSlider">
            <Arrow pointsToTheRight={false} scroll={left} />
            {workBook.pages.map(
                (value,index) => (index == workBook.index) 
                ? <Circle key={index} index={index} fn={() => button(workBook.index,index)} /> 
                : <Void key={index} index={index} fn={() => button(workBook.index,index)} />
            )}
            <Arrow pointsToTheRight={true} scroll={right} />
        </div>
    )

}

export default WorkScroll