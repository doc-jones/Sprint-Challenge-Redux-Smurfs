import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import Smurfs from './Smurfs';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import { AddSmurfs } from './AddSmurfs';
import { ListSmurfs } from './ListSmurfs';


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  deleteSmurfs = id => {
    this.props.deleteSmurfs(id);
  };



  render() {
    return (
      <div className="App">
        <div className="smurf-header-container">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
        </div>
        <ListSmurfs smurfs={this.props.smurfs} />
        <AddSmurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs,
    isLoading: state.smurfs.isLoading,
    error: state.smurfs.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurfs }
)(App);
