import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  flex: 1;
  padding-right: 2rem;
  box-sizing: border-box;
`;
const StyledHeader = styled.div`
  font-size: ${props => props.theme.sizeLarge};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacingMedium};
`;
const Description = ({description}) => {
  return (
   <StyledWrapper>
    <StyledHeader>
      Description
    </StyledHeader>
    {description}
   </StyledWrapper>
  )
}

export default Description;