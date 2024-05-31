import React, { useState,useEffect,useRef } from "react";
import bodycertificatecontent from './contents/bodycertificatecontent';


function Bodycertificate(props) {
   const thisDiv = useRef()
   const [state,setState] = useState(false);

   useEffect(() => {
   const y = thisDiv.current.getClientRects()[0].top
   const windowSize = window.innerHeight
   const changevalueonScroll=()=>{

      const docViewTop =document.documentElement.scrollTop;
      
      if (docViewTop+windowSize-y >= 300 ) {
         setState(true)
      }
   }
   if (!state) {
      window.addEventListener('scroll',changevalueonScroll)
   }
   }, );




   return (
      <div ref={thisDiv} className='app-certificate-description'>
   <img className={state?"onVisibleSize certificateimg":"invisible certificateimg"} src={props.img} alt="udemy certificate" />
         <div className="app-certificate-p">
            <h2 className={state?"onvisibleSlideUp":"invisible"}>{props.title2}</h2>
            <p className={state?"onvisibleSlideRight ":"invisible "}>{props.corpo}</p>
         </div>
      </div>

)}


export default Bodycertificate