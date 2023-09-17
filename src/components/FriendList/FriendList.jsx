import { FriendItem } from './FriendItem';
// import friends from '../json/friends.json';
import { Friendslist } from './FriendList.styled';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <Friendslist className="friend-list">
      {friends.map(friend => {
        return <FriendItem friend={friend} key={friend.id}></FriendItem>;
      })}
    </Friendslist>
  );
};
