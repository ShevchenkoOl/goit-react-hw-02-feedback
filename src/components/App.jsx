import { Component } from 'react';
import { Container} from "./Feedback/Feedback.style";
import { Statistics } from "./Statistics/Statistics";
//import PropTypes from 'prop-types';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
const { FeedbackOptions } = require("./Feedback/FeedbackOptions");


const option = {
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
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const optionKey = Object.keys(this.state);
    return (
<>
<Container>
<Section title="Please, leave feedback">
          <FeedbackOptions
            options={optionKey}
            onLeaveFeedback={this.onLeaveFeedback}>
            </FeedbackOptions>
</Section>
<Section title="Statistics">
{!total ? (
            <Notification message="There is no feedback" />
          ) : (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
          )}
</Section>
        </Container>
</>
    );
  };}


  // App.protoType = {
  //   options: PropTypes.oneOf(['good', 'neutral', 'bad']),
  
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  //   positivePercentage: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //    };