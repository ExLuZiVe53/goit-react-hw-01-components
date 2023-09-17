import user from '../json/user.json';
import { Stats } from 'components/Stats/Stats';
import { Profile } from '../Profile/Profile.jsx';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
