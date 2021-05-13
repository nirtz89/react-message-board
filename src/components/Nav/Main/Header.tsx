import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import SubTimePicker from './SubTimePicker';

const StyledHeaderTitle = styled.div`
    display: flex;
    h2 {
        margin: 0;
        padding: 0;
        color: ${colors.mainFontBlack};
        font-weight: bold;
        font-size: 16px;
    }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
`;

const StyledHeaderUserAndSearch = styled.div`
    display: flex;
`;

const StyledHeaderUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 8px;
    }
    span {
        font-size: 14px;
        font-weight: bold;
    }
`;

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <StyledHeaderTitle>
                <h2>Controversial</h2>
                <SubTimePicker />
            </StyledHeaderTitle>
            <StyledHeaderUserAndSearch>
                <StyledHeaderUser>
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="User" />
                    <span>Julia</span>
                </StyledHeaderUser>
            </StyledHeaderUserAndSearch>
        </StyledHeaderWrapper>
    )
}

export default Header
