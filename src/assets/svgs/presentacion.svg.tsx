const Presentacion = ({stylestring,mainColor,onClickCallback}:{stylestring:string,mainColor:any,onClickCallback?:() => void}) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill='#000000' onClick={onClickCallback} className={stylestring}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${mainColor};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
          </style>
        </defs>
        <title></title>
        <g data-name="Layer 35" id="Layer_35">
          <path className="cls-1" d="M62.25,47.5H23.85l-9.62,10a1.77,1.77,0,0,1-3-.65L8.05,47.5H1.61V11.11H62.25Z"></path>
          <circle className="cls-1" cx="12.76" cy="29.6" r="4.21"></circle>
          <circle className="cls-1" cx="31.76" cy="29.6" r="4.21"></circle>
          <circle className="cls-1" cx="50.76" cy="29.6" r="4.21"></circle>
        </g>
      </g>
    </svg>
  );
}

export default Presentacion;
