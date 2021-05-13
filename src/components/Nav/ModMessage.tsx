import React from 'react'
import dayjs from 'dayjs';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface IModMessageProps {
    text: string;
}

const StyledModMessage = styled.div`
    width: 90%;
    background: ${colors.mainGray};
    border-radius: 16px;
    padding: 16px;
    margin: 16px 0;
    color: ${colors.evenDarkerGray};
    font-size: 14px;
`;

const StyledModMessageHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 8px;
    }
`;

const StyledModNameAndDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const StyledModName = styled.span`
    color: ${colors.mainFontBlack};
`;

const StyledDate = styled.span`
`;

const ModMessage = ({ text }:IModMessageProps) => {
    return (
        <StyledModMessage>
            <StyledModMessageHeader>
                <img src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg" alt="" />
                <StyledModNameAndDate>
                    <StyledModName><strong>Admin name</strong></StyledModName>
                    <StyledDate>{dayjs().format('DD/MM/YYYY').toString()}</StyledDate>
                </StyledModNameAndDate>
            </StyledModMessageHeader>
            {text}
        </StyledModMessage>
    )
}

export default ModMessage
