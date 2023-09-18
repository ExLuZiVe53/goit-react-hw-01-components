import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const FriendCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  list-style: none;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
`;

const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const PhotoFriend = styled.img`
  border-radius: 4px;
  border: 2px solid rgb(128, 128, 128);
`;
const NameFriend = styled.span`
  font-style: 24px;
`;

export const FriendItem = ({ friend }) => {
  return (
    <FriendCard className="item">
      <Status className="status" isOnline={friend.isOnline}></Status>
      <PhotoFriend
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <NameFriend className="name">{friend.name}</NameFriend>
    </FriendCard>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
