import { faCaretDown, faCaretUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import LevelIndicator, { ELevelIndicatorSize } from '../../Shared/LevelIndicator';
import User from '../../Shared/User';

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

const BoardPost = () => {
    return (
        <StyledBoardPost>
            <StyledBoardImageAndMoreWrapper>
                <StyledBoardPostImage>
                    <img src={'https://picsum.photos/150/80?'+Math.random()} alt="Post" />
                </StyledBoardPostImage>
                <StyledBoardTitleAndDescription>
                    <h3>Keanu Reeves and River Phoenix in LA - 1991</h3>
                    <span>Submitted 4 hours ago by <img src="./reddit-icon.png" alt="Reddit Logo" /> <User name="Nirtz89" /></span>
                    <span>84 comments</span>
                </StyledBoardTitleAndDescription>
            </StyledBoardImageAndMoreWrapper>
            <StyledBoardMore>
                <FontAwesomeIcon icon={faEllipsisV} />
                <StyledVote>
                    <FontAwesomeIcon icon={faCaretUp} />
                    <span>300</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </StyledVote>
            </StyledBoardMore>
        </StyledBoardPost>
    )
}

export default BoardPost
