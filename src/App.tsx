import React from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from 'react-error-boundary';

import theme from './theme/theme';
import FallbackRender from './FallbackRender';
import Home from './components/Home';
import ReactToastify from './styledComponents/ReactToastify';
import AppProvider from './providers/AppProvider';
import BookProvider from './providers/BookProvider';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallbackRender={FallbackRender}>
        <CssBaseline />
        <AppProvider>
          <BookProvider>
            <Home />
          </BookProvider>
        </AppProvider>
        <ReactToastify />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
