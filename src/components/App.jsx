import { Component } from 'react';
import { Container } from "./Feedback/Feedback.style";
import { Statistics } from "./Statistics/Statistics";
import PropTypes from 'prop-types';

const { Feedback } = require("./Feedback/Feedback");

const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // static PropTypes ={

  // }
  onLeaveFeedback = option => () => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  }

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
<>
<Container>
          <Feedback
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}>
            </Feedback>

          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        </Container>
</>
    );
  };}


  App.protoType = {
    options: PropTypes.oneOf(['good', 'neutral', 'bad']),
  
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
     };