import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './redux/reducers/rootReducer';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk)
  );

  return <Provider store={store}>{children}</Provider>;
};
