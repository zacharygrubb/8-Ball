import React, { Component } from "react";
import Questions from "../Questions/Questions.jsx";

export default class QuestionsList extends Component {
  generateQuestionsList() {
    let questionsListJsx = [];
    for (let questions of this.props.questions) {
      questionsListJsx.push(
        <Questions
          key={questions.id}
          id={questions.id}
          name={questions.name}
          answer={questions.answer}
        />
      );
    }
    return questionsListJsx;
  }
  render() {
    let questionsListJsx = this.generateQuestionsList();
    return (
      <>
        <ul className="results-container">{questionsListJsx}</ul>
      </>
    );
  }
}
