import React from "react";

function Bodycard(props) {
    return (
          <div className='app-aboutme'>
               <h1 className='app-mainh1'>{props.title}</h1>
    <div className='app-aboutme-description hover-effect'>
      <div>
         <p>{props.corpo}</p>
         </div>
    </div>
          </div>
       
    )
}


export default Bodycard