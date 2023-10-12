// imported module.css for dropdown.
import style from "../Component/DropDown.module.css";
// imported useEffect,useRef,useState from react.
import { useEffect, useState } from "react";
// imported react-icons.
import { IoMdArrowDropdown } from "react-icons/io";

function DropDown() {
  //created array for setting the values to the options.
  const data = ["Yes", "Probably not"];
  //created states for setting the state.
  const [value, setvalue] = useState(false);
  const [mouseOverButton, setmouseOverButton] = useState(false);

  // handleOutside for for hidding the list display when clicking outside it.
  const handleOutside = () => {
    document.addEventListener("click", (e) => {
      setvalue(false);
    });
  };
  //useEffect for handling function handleOutside.
  useEffect(() => {
    handleOutside();
  });

  // for handling the mousehover.
  useEffect(() => {
    if (mouseOverButton) {
      setvalue(true);
    }
  }, [mouseOverButton]);

  return (
    <div className={style.container}>
      <div className={style.center}>
        <p className={style.text}>Should you use a dropdown? </p>
        <div className={style.dropdown}>
          <button
            className={style.select}
            onMouseOver={() => setmouseOverButton(!mouseOverButton)}
          >
            <span>Select</span>
            <span>
              <IoMdArrowDropdown color={"black"} fontSize={50} />
            </span>
          </button>
          {value && (
            <div id="btn-data" className={style.optionSelect}>
              {data.map((name, i) => (
                <div
                  className={style.optionChoices}
                  onClick={() => setvalue(false)}
                  key={i}
                >
                  <span>{name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropDown;
