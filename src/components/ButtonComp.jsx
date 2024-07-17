import './BaseComp.scss'
import React from 'react';
class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        buttonText: 'Class Diagram',
        class: ''
      }
    }
    
    handlePush = (e) => {
      if(this.state.class === "success"){
        const fakeDataCall = new Promise((resolve, reject) => {
            setTimeout(function(){
              resolve("success");
            }, 3000);
          });
          this.setState({class: 'loading'}, () => {
            fakeDataCall.then(() => {
              this.setState({class: "success", buttonText: "Class"});
            });
          });
      }
      const fakeDataCall = new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve("success");
        }, 3000);
      });
      this.setState({class: 'loading'}, () => {
        fakeDataCall.then(() => {
          this.setState({class: "success", buttonText: "Tree Diagram"});
        });
      });
    }
    render() {
      return (
        <div className='float-button'>
            <button onClick={this.handlePush} class={this.state.class}>
          <span>{this.state.buttonText}</span>
        </button>
        </div>
      )
    }
  }

  export default Button;