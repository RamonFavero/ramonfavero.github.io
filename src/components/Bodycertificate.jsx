import React from "react";



function Bodycertificate(props) {
    return (
    
       
        <div className='app-aboutme'>
        
        <div className='app-certificate-description'>
       
        <div className="imageparent">
          
        <img id="certificateimg" src={props.img} alt="udemy certificate" />
        </div>
        <div className="app-certificate-p">
          <h2>{props.corpo}</h2>
          
          </div>
       </div>
      </div>
    
    )
}


export default Bodycertificate