import React, { useState,useEffect,useRef } from "react";
import bodyapresentationcontent from './contents/bodyapresentationcontent';

function Bodyapresentation({language}) {
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
   
    <div ref={thisDiv} id="section-1" className='app-aboutme-description'>
      <div className="app-aboutme-description-text">
      <h1 className={state?"onvisibleSlideRight app-mainh1":"invisible app-mainh1"} >{bodyapresentationcontent[language].title}</h1>
         <p className={state?"onvisibleSlideUp":"invisible"}>{bodyapresentationcontent[language].corpo}</p>
         <p className={state?"onvisibleSlideUp":"invisible"}>{bodyapresentationcontent[language].corpo2}</p>
         </div>
         <div className="imagediv">
            <img className={state?"onVisibleSize":"invisible"} src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      </div>
   
    )
}


export default Bodyapresentation