import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';

function App() {
  return (
    <div className="App">
      <Router>
        <First path = "/home"/>
        <Second path = "/:num"/>
        <Third path = "/hello/:word1"/>
        <Fourth path = "/hello/:word/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
