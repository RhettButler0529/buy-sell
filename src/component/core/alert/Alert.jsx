import React from "react";
import { Alert } from "react-bootstrap";
import "./alert.scss";

// varient type 'primary',
// 'secondary',
// 'success',
// 'danger',
// 'warning',
// 'info',
// 'light',
// 'dark',

function aAlert({ message, variant }) {
  return (
    <Alert className="alert-box" variant={variant}>
      {message}
    </Alert>
  );
}

export default aAlert;
