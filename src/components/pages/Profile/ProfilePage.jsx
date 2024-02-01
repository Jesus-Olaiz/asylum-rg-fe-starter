import { useAuth0 } from '@auth0/auth0-react';

import './profilePage.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);

  if (user.sub.includes('google')) {
    user.full_name = user.name;
  }

  return (
    isAuthenticated && (
      <div className="userProfileContainer">
        <div className="userAvatar">
          <img src={user.picture} alt={user.name} className="userImage" />
          <h2 className="userFullName">{user.full_name}</h2>
        </div>

        <ul className="userInfo">
          <li>
            <p className="label">Favorite Hobby</p>
            <p className="description">
              {user.hobby ? user.hobby : 'Space Exploration'}
            </p>
          </li>

          <li>
            <p className="label">Email</p>
            <p className="description">{user.email}</p>
          </li>

          <li>
            <p className="label">Age</p>
            <p className="description">{user.age ? user.age : '100000'}</p>
          </li>
        </ul>
      </div>
    )
  );
};

export default Profile;
