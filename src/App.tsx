import React from 'react';
import { FirestoreProvider } from '@react-firebase/firestore';
import firebase from 'firebase';
import styled from 'styled-components';
import Main from './components/Nav/Main/Main';
import Nav from './components/Nav/Nav';
import { firebaseConfig } from './configs/firebaseConfig';
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
    <FirestoreProvider firebase={firebase} {...firebaseConfig as any}>
      <StyledWrapper>
        <StyledContainer>
          <Nav />
          <Main />
        </StyledContainer>
      </StyledWrapper>
    </FirestoreProvider>
  );
}

export default App;
