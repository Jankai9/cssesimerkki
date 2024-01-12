//import logo from './logo.svg';
import './App.css';
import Css from './Css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        { /* <img src={logo} className="App-logo" alt="logo" /> */}
      <Css />
      <Button variant='success' >success!</Button>
    </div>
  );
}

export default App;
