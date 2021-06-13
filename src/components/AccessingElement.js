import { useRef, useEffect } from "react";

export default function AccessingElement() {
  const pElementRef = useRef();

  useEffect(() => {
    console.log(pElementRef);
    console.log(pElementRef.current);
  }, [pElementRef]);

  const changeStyles = () => {
    pElementRef.current.style.color = "green";
    pElementRef.current.style.fontWeight = "700";
    pElementRef.current.style.fontSize = "30px";
  };
  return (
    <>
      <p ref={pElementRef}>I'm an Element'</p>
      <button onClick={changeStyles}>
        Click to change styles of above element
      </button>
    </>
  );
}
