import React, {createContext, PropsWithChildren, useState} from 'react';

interface ContextOptions {
  isConnected: boolean;
  setIsConnected: (par: boolean) => void;
}
export const DataContext = createContext<ContextOptions | undefined>(undefined);

export const ContextProvider = ({children}: PropsWithChildren<{}>) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  return (
    <DataContext.Provider
      value={{
        isConnected,
        setIsConnected,
      }}>
      {children}
    </DataContext.Provider>
  );
};
