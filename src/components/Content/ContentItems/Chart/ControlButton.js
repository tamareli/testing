import { render } from '@testing-library/react';
import React, { Component } from 'react';
import classes from './ChartControl.module.css';

class ControlButton extends Component {
  state = {
    buttonState: false,
  };
  onClickHandleer = (event) => {
    let updatedState = !this.state.buttonState;
    this.setState({ buttonState: updatedState });
  };
  render() {
    let defButtonClass = 'btn btn-block btn-md';
    let buttonClass = '';
    if (this.state.buttonState) buttonClass = classes.Button;
    else buttonClass = 'btn-primary';
    let updatedButtonStyle = [defButtonClass, buttonClass].join(' ');
    return (
      <button
        type='button'
        className={updatedButtonStyle}
        onClick={this.onClickHandleer}
      >
        {this.props.title}
      </button>
    );
  }
}

export default ControlButton;
