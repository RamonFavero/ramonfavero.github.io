import '../App.css';
import Apresentation from './Apresentation';
import Body from './Body';
import apresentationcontent from "./componentscontent/apresentationcontent";
import Bodyapresentation from "./Bodyapresentation";
import Bodycertificate from "./Bodycertificate";
import Bodytec from "./Bodytecnology";
import Bodycontent from './componentscontent/bodycontent';

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


function App() {
  return (
   
    <div>
       
      <Body />
      <div  className='app-column'>
          <Bodyapresentation 
      title={Bodycontent[1].title} 
      corpo={Bodycontent[1].corpo}
      corpo2={Bodycontent[1].corpo2} /> 
      <Bodytec />

      <h1 className='app-mainh1certificado'>Certificados</h1>
      <Bodycertificate 
      img={Bodycontent[2].img}
      title2={Bodycontent[2].title2}
      corpo={Bodycontent[2].corpo} />
      </div> 
      <div className='apresentation-projects'>
{apresentationcontent.map(apresentationCard)}
      </div>
      
    </div>
  );
}

export default App;
