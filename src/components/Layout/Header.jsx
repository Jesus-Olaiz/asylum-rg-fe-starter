import React from 'react';
import { Image } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

import LoginButton from '../common/LoginButton';
import LogoutButton from '../common/LogoutButton';

const { primary_accent_color } = colors;

function HeaderContent() {
  const token = localStorage.getItem('token');
  let location = useLocation();

  function dynamicButton() {
    console.log(location);

    if (location.pathname !== '/profile' && token) {
      return (
        <Link
          to="/profile"
          style={{ color: '#E2F0F7', textDecorationLine: 'none' }}
        >
          Profile
        </Link>
      );
    }
    if (location.pathname === '/profile' && token) {
      return <LogoutButton />;
    }
    if (location.pathname !== '/profile' && !token) {
      return <LoginButton />;
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>

        {dynamicButton()}
      </div>
    </div>
  );
}

export { HeaderContent };
