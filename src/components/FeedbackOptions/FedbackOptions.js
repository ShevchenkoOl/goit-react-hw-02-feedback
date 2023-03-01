import { Button,  List } from "./Feedback.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({names, onFeedback}) => {
    return (

<List>
{names.map(name => (
      <Button key={name} onClick={() => onFeedback(name)}>
        {name}
      </Button>
    ))}
</List>
    );
  };

  FeedbackOptions.propTypes={
    names: PropTypes.array.isRequired,
    onFeedback: PropTypes.func.isRequired};