
import PropTypes from 'prop-types'
import {  
          Button
        } from "./Feedback.style";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map((option, index) => (
      <Button
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
      {/* <List>
        <li>
        <Button onClick={props.onLeaveFeedback(props.options.good)} type="button">Good</Button>
        </li>
        <li>
        <Button onClick={props.onLeaveFeedback(props.options.neutral)} type="button">Neutral</Button>
        </li>
        <li>
        <Button onClick={props.onLeaveFeedback(props.options.bad)} type="button">Bad</Button>
        </li>
      </List> */}

      {/* function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul >
      <li >Good: {good}</li>
      <li >Neutral: {neutral}</li>
      <li >Bad: {bad}</li>
      <li >Total: {total}</li>
      <li >Positive feedback: {positivePercentage}%</li>
    </ul>
  );
} */}
      {/* <StatisticsList>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
        <li>Total:</li>
        <li>Positive feedback:</li>
      </StatisticsList> */}
    
    
    </div>
  );

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

