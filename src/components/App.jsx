import React, { useState } from "react";
import '../App.css';
import Apresentation from './Apresentation';
import apresentationcontent from "./contents/apresentationcontent";
import apresentationcontentEN from "./contents/apresentationcontententEN";
import Bodyapresentation from "./Bodyapresentation";
import Bodycertificate from "./Bodycertificate";
import bodycertificatecontentEN from "./contents/bodycertificatecontentEN";
import Bodytec from "./Bodytecnology";
import bodycertificatecontent from './contents/bodycertificatecontent';
import Heading from './Heading';



window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function apresentationCard(props) {
 return (
  <Apresentation 
  id={props.id}
  title={props.title}
  img={props.img}
  corpo={props.corpo}
  repositorio={props.repositorio}
  projeto={props.projeto} 
  buttonPTEN={props.buttonPTEN}
/>
) 
}
function certificationCard(props) {
return (
<Bodycertificate 
id={props.id}
title={props.title}
img={props.img}
title2={props.title2}
corpo={props.corpo}
/>
) 
}

const App=() => {

  const [language, setLanguage] = useState(0)

  const handleAdd = (e) => {
    e.preventDefault()
    if (language===0) {
  setLanguage(1)
  
  
} else {setLanguage(0)
  }
  }


  return (
   
    <div className="appParent">
  
      
    <Heading 
language={language}
handleAdd={handleAdd}
       />
      <div  className='app-column'>
          <Bodyapresentation 
      language={language}
      /> 
      <Bodytec 
     language={language}
       />
      <h1 className='app-mainh1certificado'>
{language ===0 ? bodycertificatecontent[0].title:bodycertificatecontentEN[0].title}
        </h1>
      <div className='app-certificates' >
{language===0 ? bodycertificatecontent.map(certificationCard) : bodycertificatecontentEN.map(certificationCard)}
       </div>
      </div> 
      <div className='apresentation-projects'>
{language===0 ? apresentationcontent.map(apresentationCard) : apresentationcontentEN.map(apresentationCard)}
      </div>
      
    </div>
  );
}

export default App;
