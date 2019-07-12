import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 2rem 0px;
`;

const Features = ({
  bulkUpload,
  bulkDownload,
  events,
  extendable,
}) => {
  return (
   <StyledWrapper>
     <div>
       Features
     </div>
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