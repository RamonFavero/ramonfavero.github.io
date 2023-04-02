import React from 'react'


const LanguageButton = ({language,handleAdd}) => {



  
    return (
      <div>
   <button
                className={`languageButton ${language===0? 'languageButtonEN':'languageButtonPT'} `}
                  onClick={(e)=>handleAdd(e)}
     >
  <span>{language===0? 'EN':'PT'}</span>
  </button> 
  </div>
    )
  }

export default LanguageButton
