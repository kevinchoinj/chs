import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledWrapper = styled.div`
  height: 40px;
  width: 100%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 2rem;
  box-sizing: border-box;
`;
const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
`;
const Navigation = () => {
  return (
   <StyledWrapper>
     <StyledContainer>
      <Link to='/'>
        Home
      </Link>
     </StyledContainer>
   </StyledWrapper>
  )
}

export default Navigation;