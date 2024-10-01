import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import Games from './game/games';
import Menu from './interface/menu';
import Test from '../src/test/test';
import { Settings, GeneralSettings, AppearanceSettings } from './interface/settings/settings';
import CookieDescription from './interface/settings/cookie/cookieDescription';
import i18n from './language/i18n';
import Messages from './Messages/Messages';
import Protected from './AuthContext/Protected';
import { useAuth } from './AuthContext/AuthContext';
import Logout from './AuthContext/Logout';
import Login from './AuthContext/Login/Login';
import Error404 from './HTTP/Error404/Error404';

import './App.css';
import Ai from './AI/Ai';
import UnderConstruction from './HTTP/UnderConstruction/UnderConstruction';

function App() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    // console.log(`savedDarkMode: ${savedDarkMode}`);

    if (savedDarkMode === null) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
      //   console.log(`darkModeQuery: ${darkModeQuery}`);
      const root = document.querySelector(':root');
      root.setAttribute('data-theme', darkModeQuery ? 'dark' : 'light');
      localStorage.setItem('isDarkMode', darkModeQuery);
    } else {
      const root = document.querySelector(':root');
      root.setAttribute('data-theme', savedDarkMode ? 'dark' : 'light');
    }
  }, []);


  useEffect(() => {
    const preferredLanguage = localStorage.getItem('i18nextLng').toUpperCase() || 'EN';
    i18n.changeLanguage(preferredLanguage);
  }, []);



  return (
    <Router>
      <>
        {isAuthenticated() ? (
        <div style={{ display: 'flex', height: '100vh' }}>
          <Menu />


          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />

              <Route path="/AI" element={<Ai/>} />
              
              <Route path="/messages"element={<Messages />}/>
              <Route path="/settings" element={<Settings />}>
                <Route path="general" element={<GeneralSettings />} />
                <Route path="appearance" element={<AppearanceSettings />} />
                <Route path="cookie" element={<CookieDescription />} />
              </Route>
              <Route path="/games" element={<Games />} />
              <Route path="/test" element={<Test />} />
              <Route path="/logout" element={<Logout />} />
              {/* <Route path="*" element={<Navigate to="/home" />} /> */}
              <Route path="*" element={<UnderConstruction />} />
              <Route path="/skynet-tsx" element={<Home />} />
            </Routes>
          </div>
        </div>

        ) : ( 
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/logout" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} index />
            <Route path="*" element={<Error404 />} />
          </Routes>
        )} 
      </>
    </Router>
  );
}

export default App;
