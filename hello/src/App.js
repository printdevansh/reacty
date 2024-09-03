import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
    {/* <Message /> */}
      {/* <Greet name="Devansh" nickname="Aman">
        <p>This is the childern class and aan is nickname or you can say pet name of Devansh.</p>
      </Greet>
      <Greet name="Ashutosh" nickname="Osho">
        <button>Submit</button>
      </Greet>
      <Greet name="Harsh Anand" nickname="Bholu"/>
      <Welcome name="Devansh" nickname="Aman"/>
      <Welcome  name="Ashutosh" nickname="Osho"/>
      <Welcome name="Harsh Anand" nuckname="Bholu"/> */}
      
    </div>
  );
}

export default App;
