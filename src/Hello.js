import React from "react";
import "./Hello.css";

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World</h1>
      <h2>Welcome to react {props.greeting}</h2>
    </div>
  );
};

/* First version
  
  class Hello extends React.Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <h2>Welcome to react {this.props.greeting}</h2>
      </div>
    );
  }
  
  */

export default Hello;
