import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertBar({ showAlert, setShowAlert }) {
  setTimeout(() => {
    setShowAlert(false);
  }, 2000);
  if (showAlert) {
    return (
      <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Your Account Does Not created</Alert.Heading>
        <p>please fill up all the requirements</p>
      </Alert>
    );
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
