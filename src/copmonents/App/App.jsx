import React, { Suspense } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import VideoComponent from '../VideoComponent/VideoComponent';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import MotoList from '../MotoList/MotoList';
import Footer from '../Footer/Footer';
import AdminEnter from '../AdminEnter/AdminEnter';
import AddMoto from '../AddMoto/AddMoto';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LoggedInContextProvider from '../../contexts/LoggedInContextProvider';
import PopupContextProvider from '../../contexts/PopupContextProvider';
import Contacts from '../Contacts/Contacts';
import { motion } from 'framer-motion';
import Preloader from '../Preloader/Preloader';

const MotoCard = React.lazy(() => import('../MotoCard/MotoCard'));
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
      <PopupContextProvider>
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
            <Route
              path='/'
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {' '}
                  <Main />
                </motion.div>
              }
            />
            <Route path='/admin-enter' element={<AdminEnter />} />
            <Route
              path='/:params'
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Suspense fallback={<Preloader />}>
                    <MotoCard />
                  </Suspense>
                </motion.div>
              }
            />
          </Routes>
          <Footer />
        </LoggedInContextProvider>
      </PopupContextProvider>
    </div>
  );
};

export default App;
