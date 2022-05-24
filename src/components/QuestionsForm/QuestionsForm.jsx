import React, { Component } from "react";
import "./QuestionsForm.css";

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];

export default class QuestionsForm extends Component {
  questionsRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    const getAnswer = () => {
      const index = Math.floor(Math.random() * answers.length);
      return answers[index];
    };
    let name = this.questionsRef.current.value.trim();
    if (name.length === 0) {
      alert("Error: name only contains spaces.");
    } else {
      let answer = getAnswer();
      this.props.addTask(name, answer);
      this.questionsRef.current.value = "";
    }
  };
  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <label className="input-label">
          <div className="input-name">Ask the 8-Ball</div>
          <input
            type="text"
            name="new-task"
            className="input-field"
            required
            ref={this.questionsRef}
          />
        </label>
      </form>
    );
  }
}
