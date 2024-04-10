import './App.css';
import CategoryBasedFetch from './hooks/CategoryBasedFetch';
import CleanupUseEffect from './hooks/CleanupUseEffect';
import DomChangeref from './hooks/DomChangeref';
import FetchingDataeffectOne from './hooks/FetchingDataeffectOne';
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
       <FetchingDataeffectOne/>
       <CategoryBasedFetch/>
       {/* <CleanupUseEffect/> */}
    </div>
  );
}

export default App;
