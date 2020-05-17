import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom'

//Tipografia de material-ui
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Routes
import Routes from './Routes'

//Fallback preload
import FallBack from './Components/Reusable/FallBack'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Josefin Sans"', 
      '"sans-serif"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <BrowserRouter basename="/#">
        <Suspense fallback={<FallBack />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
