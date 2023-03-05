import '../App.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Bodycontent from '../bodycontent';

function App() {
  return (
   
    <div>
       <Header headerSubTitle={Bodycontent[0].headerSubTitle} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
