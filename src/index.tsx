import './main.scss';

import React, { ReactElement, Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Toolbar, Card, CardTitle, CardText, Cell, Grid } from 'react-md';
import ReactReduxSpinner from './ReactReduxSpinner';
import ReactMdAddonDatatables from './ReactMdAddonDatatables';
import TslintConfigStorytel from './TslintConfigStorytel';
import EslintConfigStorytel from './EslintConfigStorytel';

class App extends Component {

  render () {
    return (
      <Fragment>
        <Toolbar
          colored
          title="Storytel Open Source"
        />

        <Grid>
          <Cell size={4}>
            <ReactReduxSpinner />
          </Cell>
          <Cell size={4}>
            <ReactMdAddonDatatables />
          </Cell>
          <Cell size={4}>
            <TslintConfigStorytel />
          </Cell>
          <Cell size={4}>
            <EslintConfigStorytel />
          </Cell>
        </Grid>

      </Fragment>
    );
  }
};

window.onload = () => {
  const elem = document.createElement('div');
  ReactDOM.render(<App />, elem);
  document.body.appendChild(elem);
}
