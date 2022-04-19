// import logo from './icon-above-font.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginFormik from './components/login/LoginFormik';
import CreateAccountFormik from './components/create/CreateAccountFormik';

function App() {
  return (
    <div>
        {/* <img src={logo} alt="logo" /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginFormik />} />
            <Route path='/create-account' element={  <CreateAccountFormik />} />
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