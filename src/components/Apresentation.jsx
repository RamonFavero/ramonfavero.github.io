import React from "react";


function Apresentation(props) {
    let reverseRow="row";
    let fundoProjeto="";
    
    if (props.id%2===0) {
         reverseRow ="row-reverse";
         
         fundoProjeto = "linear-gradient(90deg, rgba(250,237,205,1) 0%, rgba(250,250,240,1) 100%)";
    }else if (props.id%2) {
         reverseRow ="row"
    }
    

    return (

    <div className="app-apresentation-description" style={{flexDirection:reverseRow, Background:fundoProjeto}}>
    <div className="apresentation-imageparent">
        <img className="apresentation-image" src={props.img} alt="" />
    </div>
    <div className="corpo-apresentation">
<div className="app-certificate-p">
<span className="apresentation-title">{props.title}</span>
  
<p className="apresentation-corpo">{props.corpo}</p>
</div>
<div>
 <ul id="buttons01" className="style2 buttons" style={{opacity: 1, transform: null}}>
  <li>
   <a href={props.repositorio} className="button n01" >
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
   <span  className="label" >Github</span></a></li>
   <li>
   <a href={props.projeto} className="button n01">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
   <span className="label">Página</span></a></li>
   </ul>
  </div>
</div>
</div>
    )
    
}

export default Apresentation