import React from 'react';
import ReactDOM from 'react-dom';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  deleteRow() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      // <button type="btn" className="btn btn-danger delete-button" onClick={this.deleteRow.bind(this, 1)}>
      <button type="btn" className="btn btn-danger delete-button" onClick={this.deleteRow}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}Delete
      </button>
    );
  }

}
ReactDOM.render(
  <Delete />,
  document.getElementById('root')
);

export default Delete;