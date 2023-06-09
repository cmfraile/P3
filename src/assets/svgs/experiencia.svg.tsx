const Experiencia = ({stylestring,mainColor,onClickCallback}:{stylestring:string,mainColor:any,onClickCallback?:() => void}) => {

  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000" className={stylestring} onClick={onClickCallback}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${mainColor};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
          </style>
        </defs>
        <title></title>
        <g data-name="Layer 22" id="Layer_22">
          <circle className="cls-1" cx="32.08" cy="31.92" r="30.08"></circle>
          <path
            className="cls-1"
            d="M7.92,14H23a2.16,2.16,0,0,1,2.15,2.16h0A2.15,2.15,0,0,1,23,18.31H20.31A1.69,1.69,0,0,0,18.62,20h0a1.69,1.69,0,0,0,1.69,1.69h15a2.75,2.75,0,0,1,2.75,2.75h0a2.75,2.75,0,0,1-2.75,2.75H12.91a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2H22a2.54,2.54,0,0,1,2.53,2.54h0A2.53,2.53,0,0,1,22,36.19H2.3"
          ></path>
          <path
            className="cls-1"
            d="M61.09,39.94H41.69a2.62,2.62,0,0,0-2.63,2.62h0a2.63,2.63,0,0,0,2.63,2.63h4a1.66,1.66,0,0,1,1.66,1.65h0a1.66,1.66,0,0,1-1.66,1.66H34.31a2.69,2.69,0,0,0-2.69,2.69h0a2.7,2.7,0,0,0,2.69,2.69H52.65"
          ></path>
          <line className="cls-1" x1="27.83" x2="36" y1="15.75" y2="15.75"></line>
          <line className="cls-1" x1="39.33" x2="42.08" y1="15.75" y2="15.75"></line>
          <line className="cls-1" x1="27.83" x2="20.18" y1="51.08" y2="51.08"></line>
          <line className="cls-1" x1="17.17" x2="14.75" y1="51.08" y2="51.08"></line>
          <line className="cls-1" x1="25.08" x2="15.55" y1="56.92" y2="56.92"></line>
          <line className="cls-1" x1="11.75" x2="27.83" y1="9.75" y2="9.75"></line>
        </g>
      </g>
    </svg>
  );
}

export default Experiencia;
