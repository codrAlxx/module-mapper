import React from 'react';
import './BaseComp.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Class Diagram',
      class: ''
    };
  }

  handlePush = (e) => {
    const buttonText = this.state.buttonText === 'Class Diagram' ? 'Tree Diagram' : 'Class Diagram';
    this.setState({ class: 'loading' }, () => {
      setTimeout(() => {
        this.setState({ class: 'success', buttonText });
      }, 3000);
    });
  };

  render() {
    return (
      <div className='float-button'>
        <button onClick={this.handlePush} className={this.state.class}>
          <span>{this.state.buttonText}</span>
        </button>
      </div>
    );
  }
}

export default Button;