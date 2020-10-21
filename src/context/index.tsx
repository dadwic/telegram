import React, { useReducer } from 'react';
import { AppAction } from 'actions';
import { appReducer } from 'reducers';
import initialState from './data';

export const AppState = React.createContext<any | undefined>(undefined);

export const AppDispatch = React.createContext<
  React.Dispatch<AppAction> | undefined
>(undefined);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppState.Provider>
  );
}

export const useAppState = (): any => {
  const context = React.useContext(AppState);
  if (undefined === context) {
    throw new Error('Please use within AppStateProvider');
  }
  return context;
};

export const useAppDispatch = (): React.Dispatch<AppAction> => {
  const context = React.useContext(AppDispatch);
  if (undefined === context) {
    throw new Error('Please use within AppDispatchProvider');
  }
  return context;
};
