
import PropTypes from 'prop-types'
import {  List,
          Button
        } from "./Feedback.style";

       

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
return (
    
    <List>
      {options.map(name => (
      <Button
        key={name}
        onClick={() => onLeaveFeedback(name)}
      >
        {name}
      </Button>
    ))}   
    
    </List>
  );
    }

export default FeedbackOptions;

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

