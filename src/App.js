import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginWrapper from './components/accounts/login/LoginFormik';
import CreateAccountWrapper from './components/accounts/create/CreateAccountFormik';
import NavDrawer from './components/menu/Drawer';

export const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginWrapper />} />
          <Route path='/create-account' element={<CreateAccountWrapper />} />
          <Route path='/' element={
            <QueryClientProvider client={queryClient}>
              <NavDrawer />
            </QueryClientProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/**
  * TODO: 
  *  - show account info, delete from there, go back to login/create screen
*/}