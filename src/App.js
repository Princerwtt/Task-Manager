
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

import Navigation from './Component/Navigation';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
     
      <Navigation/>
      {!isAuthenticated && <div className='notice'>Welcome, Please Log In for Open Task Manager</div>
}
      {/* <Home/> */}
    </div>
  );
}

export default App;
