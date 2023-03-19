import React from "react";



function Bodycertificate(props) {
    return (
        <div className='app-aboutme'>
        <div className='app-certificate-description'>
      
        <img className="certificateimg" src={props.img} alt="udemy certificate" />
  
        <div className="app-certificate-p">
          <h2>{props.title2}</h2>
          <p>{props.corpo}</p>
          </div>
       </div>
      </div>
    
    )
}


export default Bodycertificate