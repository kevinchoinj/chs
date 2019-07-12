import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Element from 'pages/Element';
import Navigation from 'components/Navigation';
import {ElementsProvider} from 'contexts/ElementsContext';
import {themeData} from 'data/themeData';
import styled, {ThemeProvider} from 'styled-components';
import 'App.css';

const StyledWrapper = styled.div`
  padding-top: 40px;
`;

const App = () => {
  return (
    <ThemeProvider theme={themeData}>
      <ElementsProvider>
        <Navigation/>
        <StyledWrapper>
          <Switch>
            <Route 
              exact path="/elements/api-v2/elements/:id" 
              render={props => <Element {...props}/>}
            />
            <Route path="/" render={props => <Home {...props}/>}/>
          </Switch>
        </StyledWrapper>
      </ElementsProvider>
    </ThemeProvider>
  );
}

export default App;
