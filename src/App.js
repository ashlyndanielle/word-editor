import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      fontColor: 'Black',
      fontSize: 12,
      fontFamily: 'Monospace',
      allowEdit: 'true'
    }
  }
  // updateColor
  updateColor = val => {
    this.setState({
      fontColor: val
    })
  }
  // updateSize
  updateSize = val => {
    this.setState({
      fontSize: val
    })
  }
  // updateFamily
  updateFamily = val => {
    this.setState({
      fontFamily: val
    })
  }
  // updateEditStatus
  updateEditStatus = val => {
    this.setState({
      allowEdit: val
    })
  }
  render() {
    const styles = {
      color: this.state.fontColor,
      fontSize: this.state.fontSize,
      fontFamily: this.state.fontFamily
    }
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus={ this.updateEditStatus } />
          <ColorChanger updateColor={ this.updateColor } allowEdit={ this.state.allowEdit }/>
          <SizeChanger updateSize={ this.updateSize } allowEdit={ this.state.allowEdit }/>
          <FamilyChanger updateFamily={ this.updateFamiy } allowEdit={ this.state.allowEdit }/>
        </div>
        <div className="textArea">
          <TextContainer
            color={ this.state.fontColor }
            fontFamily={ this.state.fontFamily }
            fontSize={ this.state.fontSize }
           />
        </div>
      </div>
    )
  }
}

export default App;
