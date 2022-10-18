import React from 'react';

type AwesomeContextType = {
  awesomeState: number;
  setAwesomeState: React.Dispatch<React.SetStateAction<number>>;
};

const AwesomeContext = React.createContext<null | AwesomeContextType>(null);

type Props = {
  children: React.ReactNode;
};

export const AwesomeContextProvider = ({ children }: Props) => {
  const [awesomeState, setAwesomeState] = React.useState(0);

  return <AwesomeContext.Provider value={{ awesomeState, setAwesomeState }}>{children}</AwesomeContext.Provider>;
};

export const useAwesomeContext = () => {
  const awesomeContext = React.useContext(AwesomeContext);

  if (!awesomeContext) throw new Error('You need to use this hook inside a context provider');

  return awesomeContext;
};
