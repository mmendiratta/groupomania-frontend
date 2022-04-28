// import logo from './icon-above-font.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginFormik from './components/accounts/login/LoginFormik';
import CreateAccountFormik from './components/accounts/create/CreateAccountFormik';
import Feed from './components/feed/Feed';

function App() {
  const queryClient = new QueryClient()
  return (
    <div>
      {/* <img src={logo} alt="logo" /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginFormik />} />
          <Route path='/create-account' element={<CreateAccountFormik />} />
          <Route path='/home' element={
            <QueryClientProvider client={queryClient}>
              <Feed />
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
         *  - login screen
         *  - create screen
         *  - open to feed
         *  - show account info, delete from there, go back to login/create screen
         *  - place to create post
         *  - way to delete app
         */}