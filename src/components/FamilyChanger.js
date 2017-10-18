import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps

  render() {
    return (
      <select className="dropDownContainer" onChange={ e => this.props.updateFamily(e.target.value) } disabled={ this.props.allowEdit === 'false' } >
        <option value="Monospace"> Monospace </option>
        <option value="Arial"> Arial </option>
        <option value="Courier"> Courier </option>
      </select>
    )
  }
}