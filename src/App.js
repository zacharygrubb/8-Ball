import "./App.css";
import QuestionsForm from "./components/QuestionsForm/QuestionsForm";
import QuestionsList from "./components/QuestionsList/QuestionsList";
import React from "react";

class App extends React.Component {
  state = {
    questions: [
      {
        name: "Should I ask simple yes or no questions?",
        answer: "Yes - definitely",
        id: 1
      },
      {
        name: "Will my next project be ready a bit faster?",
        answer: "Don't count on it",
        id: 2
      }
    ],
    nextId: 3
  };
  addTask = (name, answer) => {
    let newQuestion = {
      name,
      answer,
      id: this.state.nextId
    };
    let newQuestionsList = this.state.questions;
    newQuestionsList.push(newQuestion);
    this.setState({
      questions: newQuestionsList,
      nextId: this.state.nextId + 1
    });
  };
  deleteTask = (id) => {
    let newQuestions = this.state.questions.filter(
      (questions) => questions.id !== id
    );
    this.setState({
      questions: newQuestions
    });
  };
  render() {
    return (
      <div className="App">
        <h1>8-Ball</h1>
        <QuestionsForm addTask={this.addTask} />
        <QuestionsList questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
