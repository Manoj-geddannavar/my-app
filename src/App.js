import './App.css';
import Navbar from './Components/Navbar';
import Formtext from './Components/Formtext';

function App() {    
  return (
    <> 
    <Navbar title="Textutil"/>
    <div className="container my-3">
      <Formtext heading ="Type your text to analys"/>
     </div>
    </>
  );
}


export default App;
