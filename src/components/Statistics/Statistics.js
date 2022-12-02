
import {
    StatisticsList
  } from "../Feedback/Feedback.style";


export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
      <StatisticsList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </StatisticsList>
    );
  }
