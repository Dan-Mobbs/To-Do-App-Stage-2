import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loginpage from './components/login/Loginpage';

class bodyele extends React.Component {
componentDidMount() {
const body = document.getElementsByTagName('body')[0];
body.classList.add('bg-primary');
}   
}

const App = () => {
  return (
   <>
    <Router>
      <Switch>
        <Loginpage />    
      </Switch>       
    </Router>  
  </>  
  );
}

export default App;


