import './App.css';
import CategoryBasedFetch from './hooks/CategoryBasedFetch';
import CleanupUseEffect from './hooks/CleanupUseEffect';
import DomChangeref from './hooks/DomChangeref';
import FetchingDataeffectOne from './hooks/FetchingDataeffectOne';
import Main from './hooks/Main';
import UseRef from './hooks/UseRef';
import UseRefTimer from './hooks/UseRefTimer';
import UseStatehook from './hooks/UseStatehook';
import Login from './hooks/context_api/Login';
import UserContextProvider from './hooks/context_api/context/UserContextProvider';
import Mainer from './hooks/contextproject1/Mainer';
import Parent from './hooks/useCallback/Parent';
import Imp from './hooks/usememo/Imp';
import Cookie from './local_storages/Cookie';


function App() {
  return (
    <UserContextProvider>
       {/* <p>hello welcome to react</p>
       <UseStatehook/>
       <UseRef/>
       <UseRefTimer/>
       <DomChangeref/>
       <FetchingDataeffectOne/>
       <CategoryBasedFetch/>
       {/* <CleanupUseEffect/> */}
       {/* <Main/>
       <Imp/>
       <Parent/> */}
       {/* <Login/>
       <Mainer/>  */}
       <Cookie/>
    </UserContextProvider>
  );
}

export default App;
