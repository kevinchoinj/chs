import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Element from 'pages/Element';
import Navigation from 'components/Navigation';
import {ElementsProvider} from 'contexts/ElementsContext';
import {themeData} from 'data/themeData';
import {ThemeProvider} from 'styled-components';
import 'App.css';

const App = () => {
  return (
    <ThemeProvider theme={themeData}>
      <ElementsProvider>
        <Navigation/>
        <Switch>
          <Route 
            exact path="/elements/api-v2/elements/:id" 
            render={props => <Element {...props}/>}
          />
          <Route path="/" render={props => <Home {...props}/>}/>
        </Switch>
      </ElementsProvider>
    </ThemeProvider>
  );
}

export default App;
