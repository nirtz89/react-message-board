import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../constants/colors';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface INavButtonProps {
    text: string;
    icon?: IconProp;
    isActive?: boolean;
    numComments?: number;
}

const NavButton = ({text, icon, isActive = false, numComments = 0}: INavButtonProps) => {

  const StyledButton = styled.button`
        display: flex;
        justify-content: space-between;
        width: 100%;
        border: 0;
        background: transparent;
        text-align: left;
        padding-left: 24px;
        padding-top: 14px;
        padding-bottom: 14px;
        font-size: 14px;
        font-weight: bold;
        color: ${isActive ? colors.mainFontBlack : colors.darkerGray};
        transition: .18s all;
        &:hover {
            cursor: pointer;
            color: ${colors.redditOrange};
        }
  `;

  const StyledNavButtonIcon = styled.div`
        display: inline-block;
        padding-right: 12px;
  `;

  const StyledTextAndIcon = styled.div`
        display: flex;
  `;

  const StyledCommentNumber = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
        background: ${colors.redditOrange};
        color: ${colors.white};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        opacity: ${isActive ? 1 : 0.5};
  `;
  

    return (
        <StyledButton>
            <StyledTextAndIcon>
                <StyledNavButtonIcon><FontAwesomeIcon icon={icon ?? faCircle} /></StyledNavButtonIcon> {text}
            </StyledTextAndIcon>
            {numComments > 0 && <StyledCommentNumber>{numComments}</StyledCommentNumber>}
        </StyledButton>
    )
}

export default NavButton
