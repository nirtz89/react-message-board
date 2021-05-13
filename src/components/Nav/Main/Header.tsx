import { FirebaseAuthConsumer } from '@react-firebase/auth';
import firebase from 'firebase';
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

const StyledAddPostButton = styled.button`
    background: ${colors.redditOrange};
    color: ${colors.white};
    font-size: 12px;
    border-radius: 8px;
    border: 0;
    opacity: 0.5;
    transition: .18s all;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <StyledHeaderTitle>
                <h2>Controversial</h2>
                <SubTimePicker />
                <FirebaseAuthConsumer>
                        {({ isSignedIn, user, providerId }) => {
                            return isSignedIn ? <StyledAddPostButton>New Post</StyledAddPostButton> : <StyledAddPostButton onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase.auth().signInWithPopup(googleAuthProvider);
                              }}>Login to Post</StyledAddPostButton>
                        }}
                </FirebaseAuthConsumer>
            </StyledHeaderTitle>
            <StyledHeaderUserAndSearch>
                <StyledHeaderUser>
                    <FirebaseAuthConsumer>
                        {({ isSignedIn, user, providerId }) => {
                            return (
                                isSignedIn &&
                                <>
                                    <img src={user.photoURL} alt="User" onClick={() => {firebase.auth().signOut();}}/>
                                    <span>{user.displayName.split(" ")[0]}</span>
                                </>
                            );
                        }}
                    </FirebaseAuthConsumer>
                </StyledHeaderUser>
            </StyledHeaderUserAndSearch>
        </StyledHeaderWrapper>
    )
}

export default Header
