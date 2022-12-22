import PropTypes from 'prop-types';

import { Title } from "components/Feedback/Feedback.style";

export const Section = ({ title, children }) => (
    <Title>
      <div>{title}</div>
      {children}
    </Title>
  );

  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  }