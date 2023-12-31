import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { TestProvider } from './context/test';

const Home = lazy(() => import('./pages/Home'));
const AntForm = lazy(() => import('./pages/AntForm'));
const ReactForm = lazy(() => import('./pages/ReactFrom'));
const ZustandContext = lazy(() => import('./pages/ZustandContext'));
const ErroBoundaryrPage = lazy(() => import('./pages/ErroBoundaryrPage'));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />,
    errorElement: <ErroBoundaryrPage />,
  },
  {
    path: '/react-form',
    element: <ReactForm />,
    errorElement: <ErroBoundaryrPage />,
  },
  {
    path: '/ant-form',
    element: <AntForm />,
    errorElement: <ErroBoundaryrPage />,
  },
  {
    path: '/zustand',
    element: (
      <TestProvider>
        <ZustandContext />
      </TestProvider>
    ),
    errorElement: <ErroBoundaryrPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
