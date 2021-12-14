import React from 'react';
import Alert from '@mui/material/Alert';

const ErrorAlert = () => {
  return (
    <div>
      <Alert variant="filled" severity="error">
        Ups something went wrong
      </Alert>
    </div>
  );
};

export default ErrorAlert;