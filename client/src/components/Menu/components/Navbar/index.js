import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--white);
  /* border-bottom: 2px solid var(--primary); */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  @media (max-width: 800px) {
    height: 50px;
    justify-content: center;

    & a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--white);
      background: var(--secondary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }

    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
`;

export default Navbar;
