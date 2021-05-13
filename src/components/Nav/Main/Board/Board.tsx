import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';

const StyledBoardWrapper = styled.div`
    display: flex;
    margin-top: 16px;
    width: 100%;
    height: calc(100% - 60px);
    background: ${colors.transparent};
    overflow-y: auto;
`;

const StyledBoard = styled.div`
    width: 100%;
    margin-right: 8px;
    padding: 32px;
    background: ${colors.white};
`;

const Board = () => {
    return (
        <StyledBoardWrapper>
            <StyledBoard>
            </StyledBoard>
        </StyledBoardWrapper>
    )
}

export default Board
