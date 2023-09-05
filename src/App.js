import logo from './logo.svg';

import Aecenar from './Aecenar.jpg'
import './App.css';
import SideNav from './SideNav';

function App() {
  return (
    <div className='App'>
      <div>

       <img src={Aecenar}></img>
      <button> login</button>
      </div>
      
       <div>
    <SideNav></SideNav>
        </div> 
    </div>
  );
}

export default App;
