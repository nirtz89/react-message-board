import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors, hexToRGBA } from '../../constants/colors';
import { zIndexUtil } from '../../utils/zIndexUtil';

const StyledModal = styled.div`
    background: ${hexToRGBA(colors.white,0.5)};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: ${zIndexUtil.HIGH};
`;

const StyledModalBody = styled.div`
    width: 600px;
    height: 300px;
    position: relative;
    background: ${colors.white};
    box-shadow: 0 0 35px 0px ${hexToRGBA(colors.darkerGray,1)};
    z-index: ${zIndexUtil.VERY_HIGH};
`;

const StyledModalCloseButton = styled.button`
    background: ${colors.transparent};
    border: 0;
    font-size: 24px;
    padding: 16px;
    position: absolute;
    right: 8px;
    &:hover {
        cursor: pointer;
        color: ${colors.redditOrange};
    }
`;

interface IModalProps {
    children?: any,
    onDismiss: () => void;
}

const Modal = ({ children, onDismiss }: IModalProps) => {
    return (
        <StyledModal className="animate__animated animate__fadeIn animate__faster">
            <StyledModalBody className="animate__animated animate__fadeIn">
                <StyledModalCloseButton onClick={() => onDismiss()}><FontAwesomeIcon icon={faTimes} /></StyledModalCloseButton>
                {children}
            </StyledModalBody>
        </StyledModal>
    )
}

export default Modal
