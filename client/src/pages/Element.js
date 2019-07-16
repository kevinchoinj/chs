import React, {useEffect, useState, useContext, useMemo} from 'react';
import styled from 'styled-components';
import {ElementsContext} from 'contexts/ElementsContext';
import {elementData} from 'data/elementData';
import Resources from 'components/Resources';
import Features from 'components/Features';
import ElementHeader from 'components/ElementHeader';
import Description from 'components/Description';
import VendorInformation from 'components/VendorInformation';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 2rem;
  box-sizing: border-box;
`;
const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
`;
const StyledDescript = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Element = ({match}) => {
  const {state, dispatch} = useContext(ElementsContext);
  const [displayData, setDisplayData] = useState([]);

  const id = useMemo(() => {
    return match.params.id;
  }, [match])
  
  useEffect(() => {
    //api request here
    if (!state.elements[id]) {
      console.log('fetch');
      dispatch({
        type: 'RECEIVE_ELEMENT_DATA', 
        keyValue: id, 
        payload: elementData.find(value => value.id === parseInt(id))
      });
    }
  }, [id, dispatch, state]);
  
  useEffect(() => {
    //triggers twice, once on mount and once on reducer update
    if (state.elements[id]) {
      console.log('update');
      setDisplayData(state.elements[id]);
    }
  }, [state.elements, id]);

  return (
    <StyledWrapper>
      <StyledContainer>
        <ElementHeader
          name={displayData.name}
          image={displayData.image}
          authTypes={displayData.authTypes}
          hub={displayData.hub}
        />
        <StyledDescript>
          <Description description={displayData.description}/>
          <VendorInformation vendorInformation={displayData.vendorInformation}/>
        </StyledDescript>
        <Features
          bulkUpload={displayData.bulkUpload}
          bulkDownload={displayData.bulkDownload}
          events={displayData.events}
          extendable={displayData.extendable}
        />
        <Resources resources={displayData.resources}/>
      </StyledContainer>
   </StyledWrapper>
  );
};

export default Element;