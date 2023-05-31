//{stylestring,mainColor,onClickCallback}:{stylestring:string,mainColor:any,onClickCallback:() => void}

const Contacto = ({stylestring,mainColor,onClickCallback}:{stylestring:string,mainColor:any,onClickCallback:() => void}) => {
    return (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000" className={stylestring} onClick={onClickCallback}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <style>
                {`.cls-1,.cls-2{fill:none;stroke:${mainColor};stroke-linejoin:round;stroke-width:2px;}.cls-2{stroke-linecap:round;}`}
              </style>
            </defs>
            <title></title>
            <g data-name="Layer 2" id="Layer_2">
              <rect className="cls-1" height="42.33" rx="4.61" ry="4.61" width="62" x="1" y="10.67"></rect>
              <polyline className="cls-2" points="5 16 32 32 59 16"></polyline>
              <line className="cls-2" x1="24.91" x2="5" y1="27.8" y2="44"></line>
              <line className="cls-2" x1="39.09" x2="59" y1="27.8" y2="45"></line>
            </g>
          </g>
        </svg>
      );
}

export default Contacto