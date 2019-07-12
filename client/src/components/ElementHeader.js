import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: ${props => `${props.theme.spacingLarge} 0px`};
  display: flex;
`;
const Image = ({className, src}) => (
  <img src={src} alt="" className={className}/>
);
const StyledImage = styled(Image)`
  height: 5rem;
  margin-right: 2rem;
`;
const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledHeader = styled.div`
  font-size: ${props => props.theme.sizeLarge};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacingMedium};
`;
const Features = ({
  name,
  image,
  authTypes,
  hub,
}) => (
  <StyledWrapper>
    <StyledImage src={image}/>
    <StyledTextWrapper>
      <StyledHeader>
        {name}
      </StyledHeader>
      <div>
      Authentication Types: {authTypes && authTypes.join(', ')}
      </div>
      <div>
      Hub: {hub}
      </div>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default Features;