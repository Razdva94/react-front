import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import VideoComponent from '../VideoComponent/VideoComponent';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import MotoList from '../MotoList/MotoList';
import MotoCard from '../MotoCard/MotoCard';
import Footer from '../Footer/Footer';
import AdminEnter from '../AdminEnter/AdminEnter';
import AddMoto from '../AddMoto/AddMoto';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LoggedInContextProvider from '../../contexts/LoggedInContextProvider';
import Contacts from '../Contacts/Contacts';

const Main = () => {
  return (
    <>
      <VideoComponent />
      <HeaderMobile />
      <MotoList />
      <Contacts />
    </>
  );
};

const App = () => {

  return (
    <div className='body'>
      <LoggedInContextProvider>
        <Header />
        <Routes>
          <Route
            path='/admin-add-panel'
            element={
              <ProtectedRoute
                component={<AddMoto />}
                loggedIn={localStorage.getItem('validated') === 'true'}
              />
            }
          />
          <Route path='/' element={<Main />} />
          <Route path='/admin-enter' element={<AdminEnter />} />
          <Route path='/:params' element={<MotoCard />} />
        </Routes>
        <Footer />
      </LoggedInContextProvider>
    </div>
  );
};

export default App;
