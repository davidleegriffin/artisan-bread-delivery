import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavHeader from './components/NavHeader';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NavHeader} />
          {/* <Route exact path="/detail" component={Detail} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
