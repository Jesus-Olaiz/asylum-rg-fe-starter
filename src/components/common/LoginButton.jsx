import { useAuth0 } from '@auth0/auth0-react';
import { Link } from '@material-ui/core';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  function fullLogin() {
    localStorage.setItem('token', 'LOGGED IN!');
    loginWithRedirect();
  }

  return (
    <Link
      style={{ color: '#E2F0F7', textDecorationLine: 'none' }}
      className="loginButton"
      onClick={() => fullLogin()}
    >
      Login/Register
    </Link>
  );
};

export default LoginButton;
