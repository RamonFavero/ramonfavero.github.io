import React, { useState } from "react";



function Bodycertificate(props) {

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
      
        <img className={state?"onVisibleSize certificateimg":"invisible certificateimg"} src={props.img} alt="udemy certificate" />
  
        <div className="app-certificate-p">
          <h2 className={state?"onvisibleSlideUp":"invisible"}>{props.title2}</h2>
          <p className={state?"onvisibleSlideRight ":"invisible "}>{props.corpo}</p>
          </div>
       </div>
      </div>
    
    )
}


export default Bodycertificate