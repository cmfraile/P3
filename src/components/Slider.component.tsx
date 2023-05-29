import '../styles/slider.sass'

const Slide = () => <svg className="slide" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="Circle"> <circle cx="12" cy="12" data-name="Circle" fill="none" id="Circle-2" r="10" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle> </g> </g> </g></svg>

const Slider = () => {

    return(
        <div className="slider">
            <Slide/><Slide/><Slide/><Slide/><Slide/>
        </div>
    )

}

export default Slider