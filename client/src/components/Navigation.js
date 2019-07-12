import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from 'media/logo.png';

const StyledWrapper = styled.div`
  height: ${props => props.theme.navbarHeight};
  width: 100vw;
  background-color: #ddd;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  padding: .5rem 2rem;
  box-sizing: border-box;
`;
const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  img {
    height: 100%;
  }
`;

const Navigation = () => {
  return (
   <StyledWrapper>
     <StyledContainer>
      <Link to='/'>
        <img src={logo} alt="cloud elements"/>
      </Link>
     </StyledContainer>
   </StyledWrapper>
  )
}

export default Navigation;