import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledWrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ddd;
`;
const Navigation = () => {
  return (
   <StyledWrapper>
     <Link to='/'>
       Home
     </Link>
   </StyledWrapper>
  )
}

export default Navigation;