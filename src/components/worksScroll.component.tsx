import { workBook } from "../pages/trabajos.pages";

interface isClickable { isClickable?:boolean };
interface circleAndVoidProps extends isClickable { index:number , fn:() => void };

const onClickIcon = () => {
    window.location.href = `#R2`;
    let uri = window.location.toString();
    window.history.replaceState({},document.title,uri.substring(0,uri.indexOf('#')));
}

const Circle = ( {index,fn}:circleAndVoidProps ) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="button" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
        </svg>
    )
    
}

const Void = ( {index,fn,isClickable}:circleAndVoidProps ) => {

    const onClick = () => {
        onClickIcon()
        fn()
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            style={{cursor:'pointer'}}
            className="button" 
            viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>
    )

}

interface arrowProps extends isClickable {pointsToTheRight:boolean,scroll:() => void}
const Arrow = ({pointsToTheRight,scroll,isClickable}:arrowProps) => {

    const onClick = () => {
        onClickIcon()
        scroll()
    }

    return (
        <svg
            onClick={(isClickable) ? onClick : () => {} }
            style={{
                cursor:(isClickable) ? 'pointer' : '',
                transform:(pointsToTheRight) ? 'rotate(180deg)' : ''
            }}
            xmlns="http://www.w3.org/2000/svg" 
            className="arrow" 
            viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
    )

}

interface workScrollProps { 
    workBook:workBook , 
    left:() => void , right:() => void , button:(newIndex:number) => void
}
const WorkScroll = ({workBook,left,right,button}:workScrollProps) => {

    return (
        <div className="workSlider">
            <Arrow pointsToTheRight={false} scroll={left}
                isClickable={(workBook.index >= 0)}
            />
            {workBook.pages.map(
                (value,index) => (index == workBook.index) 
                ? <Circle key={index} index={index} fn={() => button(index)} isClickable={false} /> 
                : <Void key={index} index={index} fn={() => button(index)} isClickable={true} />
            )}
            <Arrow pointsToTheRight={true} scroll={right}
                isClickable={(workBook.index <= workBook.pages.length)}
            />
        </div>
    )

}

export default WorkScroll