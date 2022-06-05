import "./button.styles.scss";
import { Button } from "react-bootstrap";
const aButton = ({ children, ...otherProps }) => {
  return (
    <Button className="button-element" {...otherProps}>
      {children}
    </Button>
  );
};

export default aButton;
