import '../App.css';
import Apresentation from './Apresentation';
import Body from './Body';
import apresentationcontent from "../apresentationcontent";

function apresentationCard(props) {
 return (
  <Apresentation 
  title={props.title}
  img={props.img}
  corpo={props.corpo} />
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
