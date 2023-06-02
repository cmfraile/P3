const Trabajos = ({stylestring,mainColor,onClickCallback}:{stylestring:string,mainColor:any,onClickCallback:() => void}) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000" onClick={onClickCallback} className={stylestring}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${mainColor};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
          </style>
        </defs>
        <title></title>
        <g data-name="Layer 49" id="Layer_49">
          <rect className="cls-1" height="24" width="24" x="20" y="1.33"></rect>
          <rect className="cls-1" height="12.78" width="12.78" x="25.61" y="50.23"></rect>
          <rect className="cls-1" height="12.78" width="12.78" x="1.08" y="50.23"></rect>
          <rect className="cls-1" height="12.78" width="12.78" x="50.13" y="50.23"></rect>
          <line className="cls-1" x1="32" x2="32" y1="25.33" y2="50.23"></line>
          <polyline className="cls-1" points="56.52 50.23 56.52 33.83 7.48 33.83 7.48 50.23"></polyline>
        </g>
      </g>
    </svg>
  );
}

export default Trabajos;
