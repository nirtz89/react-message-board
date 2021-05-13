import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components';
import { colors } from '../../../constants/colors';


const SubTimePicker = () => {

    const [isPickerOpen, setisPickerOpen] = useState(false)

    const StyledSubTimePicker = styled.div`
      font-size: 16px;
      font-weight: bold;
      padding: 0 16px;
      color: ${colors.redditOrange};
      span {
          display: inline-block;
          margin-right: 4px;
      }
      &:hover {
          cursor: pointer;
      }
    `;
    
    const StyledSubTimePickerPopup = styled.div`
    position: absolute;
      ul {
          list-style-type: none;
          border-radius: 16px;
          padding: 8px 16px;
          margin: 0;
          margin-top: 8px;
          font-size: 12px;
          background: ${colors.white};
          transition: 1s all;
          display: ${isPickerOpen ? 'block' : 'none'};
          li {
            margin: 8px 0;
            color: ${colors.mainFontBlack};
            opacity: 0.5;
            transition .18s all;
            &:hover {
                opacity: 1;
                color: ${colors.redditOrange};
            }
          }
      }
    `;

    return (
        <StyledSubTimePicker onMouseEnter={()=>setisPickerOpen(true)} onMouseLeave={()=>setisPickerOpen(false)}>
            <span>Past 24 Hours</span>
            <FontAwesomeIcon icon={faCaretDown} />
            <StyledSubTimePickerPopup>
                <ul>
                    <li>Past month</li>
                    <li>Past year</li>
                    <li>From The Beginning of time</li>
                </ul>
            </StyledSubTimePickerPopup>
        </StyledSubTimePicker>
    )
}

export default SubTimePicker
