import styled from 'styled-components';

const Button = styled.button`
  color: var(--secondary);
  background-color: var(--white);
  border: 3px solid var(--secondary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: var(--secondary);
    color: var(--white);
  }
`;

Button.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Button;
