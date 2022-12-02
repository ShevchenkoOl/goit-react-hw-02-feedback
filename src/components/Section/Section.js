import { Title } from "components/Feedback/Feedback.style";

export const Section = ({ title, children }) => (
    <Title>
      <div>{title}</div>
      {children}
    </Title>
  );