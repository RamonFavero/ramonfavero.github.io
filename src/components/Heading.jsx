import React from "react";
import LanguageButton from "./LanguageButton";



const Heading = (props,{language,handleAdd}) => {

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  

    return (
        <div >
            <div className="App-header">
              <div className="app-p-box">
              
           


            <p className='app-p onvisibleSlideUp'>{props.title1}</p>
            <p className='app-p2 onvisibleSlideRight'>{props.title2}</p>
            <p className='app-p3  onvisibleShow'>{props.title3}</p>
            <ul  className="style2 buttons onvisibleSlideDown" style={{opacity: 1, transform: null}}>
              <li>
                <a onClick={handleClickScroll} href="#start" className="button n01">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>
            <span>Começar</span></a></li></ul>
              </div>
            </div>
          
      
      </div>
    )
     
}
export default Heading


