import React, {useReducer, createContext} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
  case 'RECEIVE_ELEMENT_DATA':
    return {
      ...state, 
      elements: {
        ...state.elements,
        [action.keyValue]: action.payload,
      }
    };
    default:
      throw new Error();
    };
  };

const initialState = {
  elements: {},
};

const ElementsContext = createContext(initialState);

const ElementsProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ElementsContext.Provider value={{state, dispatch}}>
      {children}
    </ElementsContext.Provider>
  );
};

export {ElementsContext, ElementsProvider};