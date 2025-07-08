import './css/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from './router';


function App() {
  return (
    <Router>
    <div className="App">
      <Rotas></Rotas>
    </div>
    </Router>
  );
}

export default App;
