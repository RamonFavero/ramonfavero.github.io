import React, { useState,useEffect,useRef } from "react";
import bodycertificatecontent from './contents/bodycertificatecontent';


function Bodycertificate({language}) {
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
        <div ref={thisDiv} className='app-aboutme'>
        <div className='app-certificate-description'>
      
        <img className={state?"onVisibleSize certificateimg":"invisible certificateimg"} src={bodycertificatecontent[0].img} alt="udemy certificate" />
  
        <div className="app-certificate-p">
          <h2 className={state?"onvisibleSlideUp":"invisible"}>{bodycertificatecontent[language].title2}</h2>
          <p className={state?"onvisibleSlideRight ":"invisible "}>{bodycertificatecontent[language].corpo}</p>
          </div>
       </div>
      </div>
    
    )
}


export default Bodycertificate