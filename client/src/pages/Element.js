import React, {useEffect, useState, useContext, useMemo} from 'react';
import {ElementsContext} from 'contexts/ElementsContext';
import {elementData} from 'data/elementData';
import Resources from 'components/Resources';
import Features from 'components/Features';

const Element = ({match}) => {
  const {state, dispatch} = useContext(ElementsContext);
  const [displayData, setDisplayData] = useState([]);

  const id = useMemo(() => {
    return match.params.id;
  }, [match])
  
  useEffect(() => {
    //api request here
    dispatch({
      type: 'RECEIVE_ELEMENT_DATA', 
      keyValue: id, 
      payload: elementData.find(value => value.id === parseInt(id))
    });
  }, [id, dispatch]);
  
  //simulate lag on fetching data
  /*
  useEffect(() => {
    setTimeout(() => dispatch({
      type: 'RECEIVE_ELEMENT_DATA', 
      keyValue: id, 
      payload: elementData.find(value => value.id === parseInt(id))
    }), 2000);
  }, [id, dispatch]);
  */

  useEffect(() => {
    //triggers twice, once on mount and once on reducer update
    if (state.elements[id]) {
      setDisplayData(state.elements[id]);
    }
  }, [state.elements, id]);

  return (
   <div>
     <div onClick={() => console.log(state)}>
      {displayData.id}
      asdf
     </div>
     <div>
      {displayData.name}
    </div>
    <div>
      {displayData.authTypes}
    </div>
    <div>
     {displayData.hub}
    </div>
    <div>
      {displayData.description}
    </div>
    <Features
      bulkUpload={displayData.bulkUpload}
      bulkDownload={displayData.bulkDownload}
      events={displayData.events}
      extendable={displayData.extendable}
    />
    <Resources resources={displayData.resources}/>
   </div>
  )
}

export default Element;