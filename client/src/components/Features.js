import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: ${props => `${props.theme.spacingLarge}`};
`;
const StyledHeader = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.sizeLarge}
  margin-bottom: ${props => props.theme.spacingMedium};
`;
const Features = ({
  bulkUpload,
  bulkDownload,
  events,
  extendable,
}) => {
  return (
   <StyledWrapper>
     <StyledHeader>
       Features
     </StyledHeader>
     <div>
        {bulkUpload ? <div>bulk upload</div> : <div>no bulk upload</div>}
        {bulkDownload ? <div>bulk download</div> : <div>no bulk download</div>}
        {events && <div>events</div>}
        {extendable && <div>extendable</div>}
      </div>
   </StyledWrapper>
  )
}

export default Features;