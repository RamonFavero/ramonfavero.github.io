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
            <ul className="style2 buttons" style={{opacity: 1, transform: null}}>
              <li>
                <a href="#start" className="button n01">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
            <span>Começar</span></a></li></ul>
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


