import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import QuizComponent from './components/QuizComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div>
          <Switch>
            <Route exact path="/" component={MainComponent}></Route>
            <Route exact path="/quiz" component={QuizComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
