import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 2rem 0px;
`;
const StyledContainer = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacingMedium};
  align-items: center;
`;
const StyledTitle = styled.div`
  font-weight: 700;
  margin-right: 1rem;
`;
const StyledResource = styled.div`
  color: #fff;
  background-color: ${props => props.color}
  margin-right: .5rem;
  padding: 3px;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 3px;
`;
const Resources = ({resources}) => {
  return (
   <StyledWrapper>
    {resources && resources.map(value => (
      <StyledContainer key={value.name}>
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
      </StyledContainer>
    ))}
   </StyledWrapper>
  )
}

export default Resources;