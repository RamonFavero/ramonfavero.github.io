import React from "react";


function Apresentation(props) {
    return (
<div className="app-aboutme">
    <div className="app-apresentation-description">
    <div className="apresentation-imageparent">
        <img className="certificateimg" src={props.img} alt="" />
    </div>
<div className="app-certificate-p">
    <span className="apresentation-title">{props.title}</span>
       
        <p className="apresentation-corpo">{props.corpo}</p>
        </div>
</div>
</div>
    )
    
}

export default Apresentation