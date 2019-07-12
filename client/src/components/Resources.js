import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 2rem 0px;
`;
const StyledContainer = styled.div`
  display: flex;
`;
const StyledTitle = styled.div`
  font-weight: 700;
  margin-right: 1rem;
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
          <div key={string}>
            {string}
          </div>
        ))}
      </StyledContainer>
    ))}
   </StyledWrapper>
  )
}

export default Resources;