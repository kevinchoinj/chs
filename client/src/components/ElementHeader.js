import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: ${props => `${props.theme.spacingLarge} 0px`};
  display: flex;
  align-items: center;
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
const StyledBody = styled.div`
  line-height: ${props => props.theme.lineHeightMedium};
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
      <StyledBody>
        <div>
          <strong>Authentication Types:</strong> {authTypes && authTypes.join(', ')}
        </div>
        <div>
          <strong>Hub:</strong> {hub}
        </div>
      </StyledBody>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default Features;