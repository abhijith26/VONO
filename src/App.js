import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import './components/styles/colors.css'
import MyNotes from './components/My-Notes';
import Tasks from './components/Tasks';
import Navbar from './components/common/navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/mynotes" component={MyNotes} ></Route>
        <Route path="/tasks" component={Tasks} ></Route>
      </switch>
    </Router>
  );
}

export default App;
