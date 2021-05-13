import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import LevelIndicator, { ELevelIndicatorSize } from './LevelIndicator';

interface IUserProps {
    name: string;
    color?: string;
    showLevel?: boolean;
    levelSize?: ELevelIndicatorSize;
}

const StyledUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const User = ({ name, color = colors.mainFontBlack, showLevel = false, levelSize = ELevelIndicatorSize.SMALL }: IUserProps) => {
    return (
        <StyledUser>
            <span>{name}</span>
            <LevelIndicator size={levelSize} />
        </StyledUser>
    )
}

export default User
