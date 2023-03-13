import React from "react";

import Bodycontent from '../bodycontent';
import Bodyapresentation from "./Bodyapresentation";
import Bodycertificate from "./Bodycertificate";
import Bodytec from "./Bodytecnology";

function Body() {
  
    return (
        <div>
            <div className="App-header">
              <div className="app-p-box">
            <p className='app-p'>{Bodycontent[0].title}</p>
            <p className='app-p2'>{Bodycontent[0].title2}</p>
            <p className='app-p3'>{Bodycontent[0].title3}</p>
              </div>
            </div>
          <div className='app-column'>
          <Bodyapresentation 
      title={Bodycontent[1].title} 
      corpo={Bodycontent[1].corpo} /> 
      <Bodytec />

      <h1 className='app-mainh1certificado'>Certificados</h1>
      <Bodycertificate 
      img={Bodycontent[2].img}
      corpo={Bodycontent[2].corpo} />
      </div> 
      
      </div>
    )
     
}
export default Body


