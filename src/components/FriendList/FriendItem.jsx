import styled from 'styled-components';

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

const PictureFriend = styled.img`
  border-radius: 4px;
  border: 2px solid rgb(128, 128, 128);
`;
const NameFriend = styled.span`
  font-family: 'Lato', Arial, sans-serif;
  font-style: 24px;
`;

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
