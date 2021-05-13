import React from 'react'
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export enum ELevelIndicatorSize {
    SMALL,
    MEDIUM,
    BIG
}

interface ILevelIndicatorProps {
    size: ELevelIndicatorSize
    level: number;
}

const LevelIndicator = ({ size, level }: ILevelIndicatorProps) => {

    const StyledLevelIndidcator = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 50px;
        height: 10px;
        border: 1px solid ${colors.darkerGray};
        padding: 2px;
        opacity: 0.5;
        transition: .18s all;
        &:hover {
            opacity: 1;
        }
        div {
            width: ${level}%;
            background: ${colors.redditOrange};
            height: 100%;
        }
    `;

    return (
        <StyledLevelIndidcator>
            <div></div>
        </StyledLevelIndidcator>
    )
}

export default LevelIndicator
