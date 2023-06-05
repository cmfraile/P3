const Portada = ({stylestring,mainColor = '',onClickCallback}:{stylestring:string,mainColor?:string,onClickCallback?:() => void}) => 
    <svg    viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" 
            className={stylestring}
            onClick={onClickCallback}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${mainColor};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
          </style>
        </defs>
        <title></title>
        <g data-name="Layer 20" id="Layer_20">
          <rect className="cls-1" height="43.75" width="60.76" x="1.59" y="10.2"></rect>
          <polyline className="cls-1" points="8.73 44.68 21.31 26.61 33.49 44.54"></polyline>
          <circle className="cls-1" cx="13.23" cy="21.25" r="2.93"></circle>
          <polyline className="cls-1" points="31.57 41.71 44.42 20.84 55.67 44.68 8.73 44.68"></polyline>
          <rect className="cls-1" height="30.67" width="52.67" x="5.67" y="14.17"></rect>
          <line className="cls-1" x1="39.92" x2="58.33" y1="48.66" y2="48.66"></line>
        </g>
      </g>
    </svg>


export default Portada;
