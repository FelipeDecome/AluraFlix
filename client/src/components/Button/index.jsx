import React from "react";

import { StyledButton } from "./styles";

const Button = props => {
  const { children, ...rest } = props;

  return (
    <StyledButton as="a" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
