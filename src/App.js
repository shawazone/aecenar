import logo from './logo.svg';

import Aecenar from './Aecenar.jpg'
import './App.css';
import SideNav from './SideNav';

function App() {
  return (
    <div className="App">
       <img src={Aecenar}></img>
      <button> login</button>
    <SideNav></SideNav>
    </div>
  );
}

export default App;
