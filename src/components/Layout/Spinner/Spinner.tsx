import React from 'react';
import { StyledSpinner } from './Spinner.styles';

const Spinner = () => {
  return (
    <StyledSpinner>
      <div className="loader"></div>
    </StyledSpinner>
  );
};

export default Spinner;
