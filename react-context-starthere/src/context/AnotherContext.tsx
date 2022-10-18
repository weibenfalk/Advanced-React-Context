import React from 'react';

type AnotherContextType = {
  anotherState: number;
  setAnotherState: React.Dispatch<React.SetStateAction<number>>;
};

export const AnotherContext = React.createContext<null | AnotherContextType>(null);

type Props = {
  children: React.ReactNode;
};

export const AnotherContextProvider = ({ children }: Props) => {
  const [anotherState, setAnotherState] = React.useState(10);

  const memoizedContextValue = React.useMemo(
    () => ({
      anotherState,
      setAnotherState
    }),
    [anotherState, setAnotherState]
  );

  return <AnotherContext.Provider value={memoizedContextValue}>{children}</AnotherContext.Provider>;
};

export const useAnotherContext = () => {
  const anotherContext = React.useContext(AnotherContext);

  if (!anotherContext) throw new Error('You need to use this context inside a provider');

  return anotherContext;
};
