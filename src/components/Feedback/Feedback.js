
// import PropTypes from 'prop-types'
import {  Title,
          List,
          Button
        } from "./Feedback.style";

export const Feedback = (el) => (
    <div>
      <Title>Please, leave feedback</Title>
      <List>
        <li>
        <Button onClick={el.onLeaveFeedback(el.options.good)} type="button">Good</Button>
        </li>
        <li>
        <Button onClick={el.onLeaveFeedback(el.options.neutral)} type="button">Neutral</Button>
        </li>
        <li>
        <Button onClick={el.onLeaveFeedback(el.options.bad)} type="button">Bad</Button>
        </li>
      </List>
      <Title>Statistics</Title>

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



