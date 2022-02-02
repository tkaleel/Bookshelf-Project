import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Search from './components/Search';
import Title from './components/Title';
import Author from './components/Author';


function App() {
  return (
    <div className="App">
      <h2>📚📚 Bookshelf</h2>
      <Switch>
        <Route path="/title/:userQuery">
          <Title />
        </Route>

        <Route path="/:type/:userQuery">
          <Author />
        </Route>
        
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
