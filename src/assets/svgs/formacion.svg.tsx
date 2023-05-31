const Formacion = ({stylestring,mainColor,onClickCallback}:{stylestring:string,mainColor:any,onClickCallback:() => void}) => {
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
        <g data-name="Layer 34" id="Layer_34">
          <polygon className="cls-1" points="4.33 37.92 31.84 14.67 59.92 37.96 59.92 25.8 32.13 1.58 4.33 26.09 4.33 37.92"></polygon>
          <polygon className="cls-1" points="4.33 62.55 31.84 39.3 59.92 62.58 59.92 50.43 32.13 26.21 4.33 50.71 4.33 62.55"></polygon>
        </g>
      </g>
    </svg>
  );
}

export default Formacion;
