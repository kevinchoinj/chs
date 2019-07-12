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
const VendorInformation = ({vendorInformation}) => {
  return (
   <StyledWrapper>
    <StyledHeader>
    Vendor Information
    </StyledHeader>
    {vendorInformation ? 
    <StyledBody>
      <div>
      API Version: {vendorInformation.apiVersion}
      </div>
      {vendorInformation.link &&
        <div>
        Link:&nbsp;
          <a href={vendorInformation.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Vendor Documentation
          </a>
        </div>
      }
      <div>
        API Type: {vendorInformation.apiType}
      </div>
    </StyledBody>
    :
    <div>

    </div>
    }
   </StyledWrapper>
  )
}

export default VendorInformation;