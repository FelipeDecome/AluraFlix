import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--white);
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 94px;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 60px;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

// eslint-disable-next-line react/prop-types
const PageDefault = ({ children, paddingAll }) => {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
