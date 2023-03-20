import React, { useState } from "react";

function Bodyapresentation(props) {

   const [state,setState] = useState(false);
   const changevalueonScroll=()=>{

   const scrollValue=document.documentElement.scrollTop;
   if (scrollValue>100) {
      setState(true)
   }
}
window.addEventListener('scroll',changevalueonScroll)


    return ( 
    <div id="section-1" className='app-aboutme-description'>
      <div>
      <h1  className={state?"onvisibleSlideRight app-mainh1":"app-mainh1"} >{props.title}</h1>
         <p className={state?"onvisibleSlideUp":""}>{props.corpo}</p>
         <p className={state?"onvisibleSlideUp":""}>{props.corpo2}</p>
         </div>
         <div className="imagediv">
            <img className={state?"onVisibleSize":""} src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
         </div>
    </div>
          
       
    )
}


export default Bodyapresentation