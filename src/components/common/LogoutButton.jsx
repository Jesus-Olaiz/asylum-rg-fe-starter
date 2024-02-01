import { useAuth0 } from '@auth0/auth0-react';
import { Link } from '@material-ui/core';

const LogoutButton = () => {
  const { logout } = useAuth0();

  async function fullLogout() {
    localStorage.removeItem('token');
    logout({ logoutParams: { returnTo: 'http://localhost:3000' } });
  }

  return (
    <Link
      style={{ color: '#E2F0F7', textDecorationLine: 'none' }}
      className="loginButton"
      onClick={() => fullLogout()}
    >
      Log Out
    </Link>
  );
};

export default LogoutButton;
