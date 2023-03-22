import '../App.css';
import Apresentation from './Apresentation';
import Body from './Body';
import apresentationcontent from "../apresentationcontent";
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
      <div className='apresentation-projects'>
{apresentationcontent.map(apresentationCard)}
      </div>
      
    </div>
  );
}

export default App;
