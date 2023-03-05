import React from "react";



function Bodycertificate(props) {
    return (
        <div className='app-aboutme'>
        <h1 className='app-mainh1'>{props.title}</h1>
        <div className='app-certificate-description hover-effect'>
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