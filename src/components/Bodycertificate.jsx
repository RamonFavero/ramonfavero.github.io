import React, { useState } from "react";
import bodycertificatecontent from './contents/bodycertificatecontent';


function Bodycertificate({language}) {

  const [state,setState] = useState(false);
  const changevalueonScroll=()=>{

  const scrollValue=document.documentElement.scrollTop;
  if (scrollValue>1843) {
    
     setState(true)
  }
}
window.addEventListener('scroll',changevalueonScroll)

    return (
        <div className='app-aboutme'>
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