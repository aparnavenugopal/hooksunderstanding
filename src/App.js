import './App.css';
import DomChangeref from './hooks/DomChangeref';
import UseRef from './hooks/UseRef';
import UseRefTimer from './hooks/UseRefTimer';
import UseStatehook from './hooks/UseStatehook';


function App() {
  return (
    <div>
       <p>hello welcome to react</p>
       <UseStatehook/>
       <UseRef/>
       <UseRefTimer/>
       <DomChangeref/>
    </div>
  );
}

export default App;
