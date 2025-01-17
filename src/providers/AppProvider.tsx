import React, { useEffect } from 'react';
import axios from 'axios';

export interface AppProps {}

export const AppContext = React.createContext<AppProps>({} as AppProps);

const AppProvider = ({ children }: any) => {
  useEffect(() => {
    const getAppVersion = async () => {
      try {
        const { data } = await axios.get(`${process.env.PUBLIC_URL}/version.txt`);
        console.log('App Version: ', data);
      } catch (error) {
        console.error('Failed when try get App Version, Error:', error);
      }
    };
    getAppVersion();
  }, []);

  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
