import { FirestoreDocument } from '@react-firebase/firestore';
import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import LevelIndicator, { ELevelIndicatorSize } from './LevelIndicator';

interface IUserProps {
    id: string;
    color?: string;
    showLevel?: boolean;
    levelSize?: ELevelIndicatorSize;
}

const StyledUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const User = ({ id, color = colors.mainFontBlack, showLevel = false, levelSize = ELevelIndicatorSize.SMALL }: IUserProps) => {
    return (
        <FirestoreDocument path={`/users/${id}`}>
        {user => {
            return user.isLoading ? "" : 
            <StyledUser>
                <span>{user.value?.name}</span>
                <LevelIndicator size={levelSize} level={user.value?.karma} />
            </StyledUser>;
        }}
        </FirestoreDocument>        
    )
}

export default User
