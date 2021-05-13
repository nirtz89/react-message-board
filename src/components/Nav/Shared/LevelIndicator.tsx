import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export enum ELevelIndicatorSize {
    SMALL,
    MEDIUM,
    BIG
}

interface ILevelIndicatorProps {
    size: ELevelIndicatorSize
}

const LevelIndicator = ({ size }: ILevelIndicatorProps) => {

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
            width: 50%;
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
