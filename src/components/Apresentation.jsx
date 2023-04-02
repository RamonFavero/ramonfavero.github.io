import React, { useState, useEffect } from "react";
 


function Apresentation(props) {
  
    
    let reverseRow="row";
    let fundoProjeto="";
   
   const [userWindow, setUserWindow] = useState(2550);
   const [count, setCount] = useState(1);
    if (props.id%2===0) {
         reverseRow ="row-reverse";
         
         fundoProjeto = "linear-gradient(90deg, rgba(250,237,205,1) 0%, rgba(250,250,240,1) 100%)";
    }else if (props.id%2) {
         reverseRow ="row"
    }
    const [booleanArray, setBooleanArray] = useState([false]);

        const [scrollY, setScrollY] = useState(0);
      
        useEffect(() => {
          function handleScroll() {
            setScrollY(window.scrollY);
           
          }
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);

if (scrollY>userWindow) {
   
    if (booleanArray[count]===undefined) {
        setCount(count+1)
        setUserWindow(userWindow+600)
        setBooleanArray(prevArray => [...prevArray, true]);
    }
    
}



    return (

    <div className="app-apresentation-description" style={{flexDirection:reverseRow, Background:fundoProjeto}}>
    <div  className="apresentation-imageparent">
        <img  className={booleanArray[props.id] ?"onVisibleSize apresentation-image":"invisible apresentation-image"} src={props.img} alt="" />
    </div>
    <div  className="corpo-apresentation">
<div className="apresentation-title-and-corpo">
<span className={booleanArray[props.id] ?"onvisibleSlideUp apresentation-title":"invisible apresentation-title"}>{props.title}</span>
  
<p className={booleanArray[props.id] ?"onvisibleShow apresentation-corpo":"invisible apresentation-corpo"}>{props.corpo}</p>
</div>
<div className={booleanArray[props.id] ?"onvisibleSlideDown":"invisible"}>
 <ul id="buttons01" className="style2 buttons" style={{opacity: 1, transform: null}}>
  <li>
   <a href={props.repositorio} className="button n01" >
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
   <span  className="label" >Github</span></a></li>
   <li>
   <a href={props.projeto} className="button n01">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
   <span className="label">{props.buttonPTEN}</span></a></li>
   </ul>
  </div>
</div>
</div>
    )
    
}

export default Apresentation