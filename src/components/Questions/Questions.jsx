import React, { Component } from "react";
import "./Questions.css";

export default class Questions extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteTask(this.props.id);
  };
  render() {
    return (
      <li className="ask">
        <div className="question">{this.props.name}</div>
        <div className="answer">{this.props.answer}</div>
      </li>
    );
  }
}
