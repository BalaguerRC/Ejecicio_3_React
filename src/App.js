import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/ContactComponent';
//import ContactoComponent from './components/ContactoComponent';
//import Contacto from './components/forms/Contacto';
//import Clock from './components/Clock';
//import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<ContactoComponent></ContactoComponent>*/}
        {/*<Clock></Clock>*/}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
