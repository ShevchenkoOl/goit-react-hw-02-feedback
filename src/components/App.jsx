import { Component } from 'react';
import { Container} from "./Feedback/Feedback.style";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './Feedback/FeedbackOptions';

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
    const totalFeedback = good +neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
   
    return (
<Container>
  <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
  </Section>
 

  {this.countTotalFeedback() > 0 ? (
    
    <Section title="Statistics">
    <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
     </Section>
            
          ) : (
            <Notification message="There is no feedback" />
          )}
</Container>
);
   }
  }


   export default App;