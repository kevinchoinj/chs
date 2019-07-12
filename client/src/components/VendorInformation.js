import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  flex: 1;
  padding-right: 2rem;
  box-sizing: border-box;
`;
const StyledHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacingMedium};
`;
const VendorInformation = ({vendorInformation}) => {
  return (
   <StyledWrapper>
    <StyledHeader>
    Vendor Information
    </StyledHeader>
    {vendorInformation ? 
    <div>
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
    </div>
    :
    <div>

    </div>
    }
   </StyledWrapper>
  )
}

export default VendorInformation;