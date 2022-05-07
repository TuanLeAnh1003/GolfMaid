import React, { createContext, useReducer, useContext } from 'react';
import jwt_decode from 'jwt-decode';

const StoreContext = createContext();

const initState = {
  userId: "",
  firstName: "",
  lastName: "",
};


const LOGIN = "login";


export const action = {
  login: (payload) => {
    return {
      type: LOGIN,
      payload,
    };
  },
   
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      const info = jwt_decode(action.payload);
      return {
        ...state,
        userId: info.userId,
      };

    default:
      throw new Error('Invalid action');
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
  );
}


export const useStore = () => {
  const [state, dispatch] = useContext(StoreContext);
  return [state, dispatch];
};