
import style from "../Component/DropDown.module.css";

import { useEffect, useRef,useState} from 'react';
import {IoMdArrowDropdown} from "react-icons/io";
function DropDown() {
    const data = ["Yes","Probably not"];
    const textRef = useRef();
    const [value,setvalue] = useState(false);
    const [mouseOverButton,setmouseOverButton] = useState(false);


 const handleOutside=()=>{
   document.addEventListener("click",(e)=>{
    setvalue(false);
   })
 }

 useEffect(()=>{
   handleOutside();
 })

 useEffect(() => {
        if (mouseOverButton) {
        setvalue(true);
      }
  }, [mouseOverButton]);


  return (
    <div className={style.container}>
    <div className={style.center}>
    <p className={style.text} ref={textRef}>Should you use a dropdown? </p>
    <div className={style.dropdown}>
    <button className={style.select} onMouseOver={()=>setmouseOverButton(!mouseOverButton)}><span>Select</span>
    <span><IoMdArrowDropdown color={"black"} fontSize={50}/></span>
    </button>
    {value && 
        <div id="btn-data" className={style.optionSelect}>
     {data.map((name,i)=>(
         <div className={style.optionChoices} onClick={()=>setvalue(false)} key={i}><span>{name}</span></div>
     )
     )}
    
     </div>}
    </div>
  
    </div>
    </div>
  )
}

export default DropDown

// echo "# dropdown-using-react" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Mansi523/dropdown-using-react.git
// git push -u origin main