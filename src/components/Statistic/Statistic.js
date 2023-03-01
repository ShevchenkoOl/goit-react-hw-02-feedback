//import { Title } from "../FeedbackOptions/Feedback.styled"
import { Item, List } from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistic = ({ good, neutral, bad, total, positive }) => {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positive}%</Item>
    </List>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string.isRequired,
};
