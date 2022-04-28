import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginWrapper from './components/accounts/login/LoginFormik';
import CreateAccountWrapper from './components/accounts/create/CreateAccountFormik';
import Feed from './components/feed/Feed';

export const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginWrapper />} />
          <Route path='/create-account' element={<CreateAccountWrapper />} />
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