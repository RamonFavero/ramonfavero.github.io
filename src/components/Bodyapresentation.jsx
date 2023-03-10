import React from "react";

function Bodycard(props) {
    return (
          <div className='app-aboutme'>
              
    <div className='app-aboutme-description'>
      <div>
      <h1 className='app-mainh1'>{props.title}</h1>
         <p>{props.corpo}</p>
         </div>
         <div className="imagediv">
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
         </div>
    </div>
          </div>
       
    )
}


export default Bodycard