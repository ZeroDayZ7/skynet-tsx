import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faCompass,
  faEnvelope,
  faRectangleList,
  faStar,
  faDiceSix,
  faCog,
  faVial,
  faPersonWalkingDashedLineArrowRight,
  faRightToBracket,
  faCircleInfo,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './menu.css';

const Menu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(() => {
    const savedExpanded = localStorage.getItem('menuExpanded');
    return savedExpanded ? JSON.parse(savedExpanded) : false;
  });

  const handleItemClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    localStorage.setItem('menuExpanded', JSON.stringify(expanded));
  }, [expanded]);

  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'no-expanded'}`}>
      <div
        key={0}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => setExpanded(!expanded)}>
        <div className="menu-ico">
          <FontAwesomeIcon icon={faBars} size="xl" style={{ color: 'black' }} />
        </div>
      </div>
      {/* ============================= LOGIN ============================== */}
      {/* <Link
        to={'/login'}
        title={t('login')}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => handleItemClick('/login')}>
        <div className="menu-ico">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className={` ${location.pathname === '/login' ? 'activeTab fa-beat' : ''}`}
            size="xl"
          />
        </div>
        <div
          className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/login' ? 'activeDescription' : ''}`}>
          {t('login')}
        </div>
      </Link> */}
      {/* ============================= HOME ============================== */}
      <Link
        to={'/home'}
        title={t('home')}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => handleItemClick('/home')}>
        <div className="menu-ico">
          <FontAwesomeIcon
            icon={faHome}
            className={` ${location.pathname === '/home' ? 'activeTab fa-beat' : ''}`}
            size="xl"
          />
        </div>
        <div
          className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/home' ? 'activeDescription' : ''}`}>
          {t('home')}
        </div>
      </Link>
      <div className="menu-darker">
        {/* ============================= EXPLORE ============================== */}
        <Link
          to={'/explore'}
          title={t('explore')}
          className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
          onClick={() => handleItemClick('/explore')}>
          <div className="menu-ico">
            <FontAwesomeIcon
              icon={faCompass}
              className={` ${location.pathname === '/explore' ? 'activeTab fa-beat' : ''}`}
              size="xl"
            />
          </div>
          <div
            className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/explore' ? 'activeDescription' : ''}`}>
            {t('explore')}
          </div>
        </Link>
        {/* ============================= MESSAGES ============================== */}
        <Link
          to={'/messages'}
          title={t('messages')}
          className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
          onClick={() => handleItemClick('/messages')}>
          <div className="menu-ico">
            <FontAwesomeIcon
              icon={faMessage}
              className={` ${location.pathname === '/messages' ? 'activeTab fa-beat' : ''}`}
              size="xl"
            />
          </div>
          <div
            className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/messages' ? 'activeDescription' : ''}`}>
            {t('messages')}
          </div>
        </Link>
        {/* ============================= RESOURCES ============================== */}
        <Link
          to={'/resources'}
          title={t('resources')}
          className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
          onClick={() => handleItemClick('/resources')}>
          <div className="menu-ico">
            <FontAwesomeIcon
              icon={faRectangleList}
              className={` ${location.pathname === '/resources' ? 'activeTab fa-beat' : ''}`}
              size="xl"
            />
          </div>
          <div
            className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/resources' ? 'activeDescription' : ''}`}>
            {t('resources')}
          </div>
        </Link>
        {/* ============================= STARRED ============================== */}
        <Link
          to={'/starred'}
          title={t('starred')}
          className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
          onClick={() => handleItemClick('/starred')}>
          <div className="menu-ico">
            <FontAwesomeIcon
              icon={faStar}
              className={` ${location.pathname === '/starred' ? 'activeTab fa-beat' : ''}`}
              size="xl"
            />
          </div>
          <div
            className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/starred' ? 'activeDescription' : ''}`}>
            {t('starred')}
          </div>
        </Link>
        {/* ============================= GAMES ============================== */}
        <Link
          to={'/games'}
          title={t('games')}
          className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
          onClick={() => handleItemClick('/games')}>
          <div className="menu-ico">
            <FontAwesomeIcon
              icon={faDiceSix}
              className={` ${location.pathname === '/games' ? 'activeTab fa-beat' : ''}`}
              size="xl"
            />
          </div>
          <div
            className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/games' ? 'activeDescription' : ''}`}>
            {t('games')}
          </div>
        </Link>
        {/* ============================= TEST ============================== */}
        <Link
          to={'/test'}
          title={t('test')}
          className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
          onClick={() => handleItemClick('/test')}>
          <div className="menu-ico">
            <FontAwesomeIcon
              icon={faVial}
              className={` ${location.pathname === '/test' ? 'activeTab fa-beat' : ''}`}
              size="xl"
            />
          </div>
          <div
            className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/test' ? 'activeDescription' : ''}`}>
            {t('test')}
          </div>
        </Link>
      </div>
      {/* ============================= SETTINGS ============================== */}
      <Link
        to={'/settings'}
        title={t('settings')}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => handleItemClick('/settings')}>
        <div className="menu-ico">
          <FontAwesomeIcon
            icon={faCog}
            className={` ${location.pathname === '/settings' ? 'activeTab fa-spin' : ''}`}
            size="xl"
          />
        </div>
        <div
          className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/settings' ? 'activeDescription' : ''}`}>
          {t('settings')}
        </div>
      </Link>
      {/* ============================= CONTACT ============================== */}
      <Link
        to={'/contact'}
        title={t('contact')}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => handleItemClick('/contact')}>
        <div className="menu-ico">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={` ${location.pathname === '/contact' ? 'activeTab fa-beat' : ''}`}
            size="xl"
          />
        </div>
        <div
          className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/contact' ? 'activeDescription' : ''}`}>
          {t('contact')}
        </div>
      </Link>
      {/* ============================= HELP ============================== */}
      <Link
        to={'/help'}
        title={t('help')}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => handleItemClick('/help')}>
        <div className="menu-ico">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className={` ${location.pathname === '/help' ? 'activeTab fa-beat' : ''}`}
            size="xl"
          />
        </div>
        <div
          className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/help' ? 'activeDescription' : ''}`}>
          {t('help')}
        </div>
      </Link>
      {/* ============================= LOGOUT ============================== */}
      <Link
        to={'/logout'}
        title={t('logout')}
        className={`menu-item ${expanded ? 'expanded-menu-item' : 'no-expanded-menu-item'}`}
        onClick={() => handleItemClick('/logout')}>
        <div className="menu-ico">
          <FontAwesomeIcon
            icon={faPersonWalkingDashedLineArrowRight}
            className={` ${location.pathname === '/logout' ? 'activeTab fa-beat' : ''}`}
            size="xl"
          />
        </div>
        <div
          className={`description 
          ${expanded ? 'show-description' : ''}
          ${location.pathname === '/logout' ? 'activeDescription' : ''}`}>
          {t('logout')}
        </div>
      </Link>
    </div>
  );
};

export default Menu;
