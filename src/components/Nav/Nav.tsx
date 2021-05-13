import { faAngry, faArrowUp, faComments, faFireAlt, faMedal, faStarOfLife, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import ModMessage from './ModMessage';
import NavButton from './NavButton';

const Nav = () => {

    const StyledNav = styled.nav`
        width: 300px;
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 8px;
        background: ${colors.white};
    `;

    const StyledLogoContainer = styled.h1`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 16px 24px;
        img {
            width: 100%;
            max-width: 80px;
        }
    `;

    const StyledNavButtonsContainer = styled.div`

    `;

    const StyledModMessagesContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 12px;
    `;

    const StyledScrolledNavContainer = styled.div`
        max-height: calc(100% - 100px);
        overflow-y: auto;
    `;

    return (
        <StyledNav>
            <StyledLogoContainer>
                <img src="./reddit-logo.png" alt="" />
            </StyledLogoContainer>
            <StyledScrolledNavContainer>
                <StyledNavButtonsContainer>
                    <NavButton text="HOT" icon={faFireAlt} />
                    <NavButton text="NEW" icon={faStarOfLife} />
                    <NavButton text="RISING" icon={faArrowUp} />
                    <NavButton text="CONTROVERSIAL" icon={faAngry} isActive={true} />
                    <NavButton text="TOP" icon={faMedal} />
                    <NavButton text="GILDED" icon={faUserFriends} />
                    <NavButton text="COMMENTS" icon={faComments} numComments={9} />
                </StyledNavButtonsContainer>
                <StyledModMessagesContainer>
                    <ModMessage text={"Hey everyone, thanks for joining!"} />
                    <ModMessage text={"Hey everyone, thanks for joining!"} />
                </StyledModMessagesContainer>
            </StyledScrolledNavContainer>
        </StyledNav>
    )
}

export default Nav
