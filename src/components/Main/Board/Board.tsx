import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import BoardPost from './BoardPost';
import { FirestoreCollection } from '@react-firebase/firestore';

const StyledBoardWrapper = styled.div`
    display: flex;
    margin-top: 16px;
    width: 100%;
    height: calc(100% - 60px);
    background: ${colors.transparent};
    overflow-y: auto;
`;

const StyledBoard = styled.div`
    width: 100%;
    margin-right: 8px;
    padding: 32px;
    background: ${colors.white};
    overflow-y: auto;
`;

const Board = () => {
    return (
        <StyledBoardWrapper>
            <StyledBoard>
                <FirestoreCollection path="/posts/">
                    {posts => {
                        console.log(posts);
                        return posts.isLoading ? "Loading" : 
                        <>
                            {posts.value.map((post: any, index: number) => <BoardPost title={post.title} userId={post.userId} timestamp={post.published_timestamp} numComments={post.comments.length} key={index} />)}
                        </>
                    }}
                </FirestoreCollection>
            </StyledBoard>
        </StyledBoardWrapper>
    )
}

export default Board
