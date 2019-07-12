import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  flex: 1;
  padding-right: 2rem;
  box-sizing: border-box;
  margin-bottom: ${props => props.theme.spacingLarge};
`;
const StyledHeader = styled.div`
  font-size: ${props => props.theme.sizeLarge};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacingMedium};
`;
const StyledBody = styled.div`
  line-height: ${props => props.theme.lineHeightMedium};
`;
const Description = ({description}) => {
  return (
   <StyledWrapper>
    <StyledHeader>
      Description
    </StyledHeader>
    <StyledBody>
      {description}
      {description}
    </StyledBody>
   </StyledWrapper>
  )
}

export default Description;