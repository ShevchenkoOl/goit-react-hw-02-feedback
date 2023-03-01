import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Statistic } from './Statistic/Statistic';
import { Container } from './FeedbackOptions/Feedback.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positive = ((good / this.countTotalFeedback()) * 100).toFixed(0);
    return positive;
  };

  render() {
    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            names={Object.keys(this.state)}
            onFeedback={this.leaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistic">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
