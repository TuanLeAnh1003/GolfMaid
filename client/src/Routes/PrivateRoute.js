import React, {useEffect} from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../Store/StoreContext';

function PrivateRoute({ children }) {
  const location = useLocation();
  const [state, dispatch, isAuth] = useStore();
  return isAuth() ? children : <Navigate to="/login" />;
}
  


export default PrivateRoute;