import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layout/layout';
import AlarmPage from './pages/AlarmPage/AlarmPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
      </Route>
    </Routes>
  );
};

export default App;
