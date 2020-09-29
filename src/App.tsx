import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AboutPages from './components/pages/AboutPages';
import TodoPages from './components/pages/TodoPages';


const App: React.FC = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={TodoPages} />
          <Route exact path='/about' component={AboutPages} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
