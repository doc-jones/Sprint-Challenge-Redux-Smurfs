import React from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions";

class AddSmurfs extends React.Component {
  constructor() {
    super();
    this.state = {
      newSmurf: { name: "", age: 0, height: 0 }
    };
  }

  handleChange = e => {
    e.persist();
    console.log(e.target.value);
    this.setState(prevState => ({
      ...this.state,
      newSmurf: {
        ...prevState.newSmurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  addSmurfs = e => {
    e.preventDefault();
    this.props.addSmurfs(this.state.newSmurf);
    this.setState({
      newSmurf: { name: "", age: 0, height: 0 }
    });
  };

  render() {
    return (
      <div className="add-smurf">
        <form onSubmit={this.addSmurfs}>
          <h2>Please enter the details below:</h2>
          <div className="form">
            <div className="label">Name:</div>
            <div className="input">
              <input
                type="text"
                className="input-contact"
                name="name"
                value={this.state.newSmurf.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="label">Age:</div>
            <div className="input">
              <input
                type="text"
                className="details"
                name="age"
                value={this.state.newSmurf.age}
                onChange={this.handleChange}
              />
            </div>
            <div className="label">Height:</div>
            <div className="input">
              <input
                type="text"
                className="details"
                name="height"
                value={this.state.newSmurf.height}
                onChange={this.handleChange}
              />
            </div>
            <div className="Button">
              <button onClick={this.addSmurfs}>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurfs }
)(AddSmurfs);