import {
  FriendCard,
  Status,
  NameFriend,
  PictureFriend,
} from './FriendItem.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ friend }) => {
  return (
    <FriendCard className="item">
      <Status className="status" isOnline={friend.isOnline}></Status>
      <PictureFriend
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <NameFriend className="name">{friend.name}</NameFriend>
    </FriendCard>
  );
};
