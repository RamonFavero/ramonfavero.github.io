import React, { useState } from "react";
import '../App.css';
import Apresentation from './Apresentation';
import bodyapresentationcontent from './contents/bodyapresentationcontent';
import apresentationcontent from "./contents/apresentationcontent";
import Bodyapresentation from "./Bodyapresentation";
import Bodycertificate from "./Bodycertificate";
import Bodytec from "./Bodytecnology";
import bodycertificatecontent from './contents/bodycertificatecontent';
import headingcontent from './contents/headingcontent';
import Heading from './Heading';
import tecnologycontent from "./contents/tecnologycontent";
import LanguageButton from "./LanguageButton";

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
  projeto={props.projeto} />
 ) 
}



const App=() =>{

  const [language, setLanguage] = useState(0)

  const handleAdd = (e) => {
    e.preventDefault()
    if (language===0) {
  setLanguage(1)
  
} else {setLanguage(0)}
  }

  

  return (
   
    <div>
     <LanguageButton  language={language} 
      handleAdd={handleAdd} />
      
    <Heading 
      title1={headingcontent[language].title1}
      title2={headingcontent[language].title2}
      title3={headingcontent[language].title3}
       />
      <div  className='app-column'>
          <Bodyapresentation 
      title1={bodyapresentationcontent[language].title} 
      title2={bodyapresentationcontent[language].corpo}
      title3={bodyapresentationcontent[language].corpo2} /> 
      <Bodytec 
      headerSubTitle={tecnologycontent[language].headerSubTitle}
      tec={tecnologycontent[language].tec}
       />

      <h1 className='app-mainh1certificado'>{bodycertificatecontent[language].title}</h1>
      <Bodycertificate 
      img={bodycertificatecontent[0].img}
      title2={bodycertificatecontent[language].title2}
      corpo={bodycertificatecontent[language].corpo} />
      </div> 
      <div className='apresentation-projects'>
{apresentationcontent.map(apresentationCard)}
      </div>
      
    </div>
  );
}

export default App;
