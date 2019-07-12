import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 2rem 0px;
  border: 1px solid #aaa;
  bos-sizing: border-box;
  li {
    display: flex;
    font-weight: 700;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #aaa;
    &:nth-child(even) {
      background-color: #ddd;
    }
    &:nth-last-child(1) {
      border-bottom: none;
    }
  }
`;
const StyledTitle = styled.div`
  margin-right: 1rem;
`;
const StyledResource = styled.div`
  color: #fff;
  background-color: ${props => props.color}
  padding: 3px 6px;
  box-sizing: border-box;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  margin: .5rem .5rem .5rem 0px;
`;
const Resources = ({resources}) => {
  return (
   <StyledWrapper>
    {resources && resources.map(value => (
      <li key={value.name}>
        <StyledTitle>
          {value.name}
        </StyledTitle>
        {value.actions && value.actions.map(string => (
          <StyledResource 
            key={string}
            color={() => {
              switch(string) {
                case 'delete':
                  return '#f93e3e';
                case 'get':
                  return '#61affe';
                case 'get by ID':
                  return '#61affe';
                case 'patch':
                  return '#50e3c2';
                case 'post':
                  return '#49cc90';
                case 'put': 
                  return '#fca130';
                default:
                  return '#000';
                }
              }
            }
          >
            {string}
          </StyledResource>
        ))}
      </li>
    ))}
   </StyledWrapper>
  )
}

export default Resources;