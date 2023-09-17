import styled from 'styled-components';
import { FriendItem } from './FriendItem';

const Friendslist = styled.ul`
  background-color: #fff;
  width: 600px;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px;
`;

export const FriendList = ({ friends }) => {
  return (
    <Friendslist className="friend-list">
      {friends.map(friend => {
        return <FriendItem friend={friend} key={friend.id}></FriendItem>;
      })}
    </Friendslist>
  );
};
