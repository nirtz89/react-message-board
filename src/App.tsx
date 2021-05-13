import React from 'react';
import styled from 'styled-components';
import Main from './components/Nav/Main/Main';
import Nav from './components/Nav/Nav';
import { colors, hexToRGBA } from './constants/colors';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(${colors.gradientGray}, ${colors.gradientWhite});
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 90vw;
  box-shadow: 0 0 35px 0px ${hexToRGBA(colors.darkerGray,1)};
`;

function App() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Nav />
        <Main />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
