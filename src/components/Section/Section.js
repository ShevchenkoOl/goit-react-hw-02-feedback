import PropTypes from 'prop-types';
import { Title } from '../FeedbackOptions/Feedback.styled';


export const Section = ({title, children}) =>{
    return(
        <Title>
        <div>{title}</div>
        {children}
        </Title>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}