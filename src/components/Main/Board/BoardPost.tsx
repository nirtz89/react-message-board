import { faCaretDown, faCaretUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import User from '../../Shared/User';

dayjs.extend(relativeTime);

const StyledBoardPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.white};
    padding-bottom: 32px;
`;

const StyledBoardPostImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 32px;
`;

const StyledBoardImageAndMoreWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 32px;
`;

const StyledBoardTitleAndDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    h3 {
        font-size: 14px;
        margin: 0;
    }
    span {
        color: ${colors.evenDarkerGray};
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 16px;
            height: 16px;
            margin: 0 8px;
        }
    }
`;

const StyledBoardMore = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${colors.evenDarkerGray};
`;

const StyledVote = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 16px;
    color: ${colors.evenDarkerGray};
`;

const StyledVoteButton = styled.div`
    transition: .18s all;
    cursor: pointer;
    &:hover {
        transform: scale(2);
        color: ${colors.redditOrange};
    }
`

interface IBoardPostProps {
    title: string;
    img?: string;
    userId: string;
    numComments: number;
    timestamp: any;
}

const BoardPost = ({title, img = '', userId, numComments, timestamp}: IBoardPostProps) => {
    return (
        <StyledBoardPost>
            <StyledBoardImageAndMoreWrapper>
                <StyledBoardPostImage>
                    <img src={'https://picsum.photos/150/80'} alt="Post" />
                </StyledBoardPostImage>
                <StyledBoardTitleAndDescription>
                    <h3>{title}</h3>
                    <span>Submitted {dayjs(timestamp.toDate()).fromNow(true)} ago by <img src="./reddit-icon.png" alt="Reddit Logo" /> <User id={userId} /></span>
                    <span>{numComments} {numComments > 1 ? "comments" : "comment"}</span>
                </StyledBoardTitleAndDescription>
            </StyledBoardImageAndMoreWrapper>
            <StyledBoardMore>
                <FontAwesomeIcon icon={faEllipsisV} />
                <StyledVote>
                    <StyledVoteButton><FontAwesomeIcon icon={faCaretUp} /></StyledVoteButton>
                    <span>300</span>
                    <StyledVoteButton><FontAwesomeIcon icon={faCaretDown} /></StyledVoteButton>
                </StyledVote>
            </StyledBoardMore>
        </StyledBoardPost>
    )
}

export default BoardPost
