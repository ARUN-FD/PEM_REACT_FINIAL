import './App.css';
import Router from './router';
import GlobalContext from "./Services/GlobalContext/GlobalContext";

function App() {
  return (
    <div className="App">
    <GlobalContext>
    <Router />
    </GlobalContext>
    </div>
  );
}

export default App;
