import React from 'react'
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Board from './Board/Board';
import Header from './Header';

const StyledMain = styled.main`
  width: calc(90vw - 300px);
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 24px 48px;
  background: ${colors.mainGray};
`;

const Main = () => {
    return (
        <StyledMain>
            <Header />
            <Board />
        </StyledMain>
    )
}

export default Main
