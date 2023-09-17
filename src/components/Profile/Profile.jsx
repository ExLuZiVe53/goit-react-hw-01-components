import {
  Card,
  Description,
  Photo,
  Name,
  Text,
  Statlist,
  StatItem,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Photo src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Text className="tag">{tag}</Text>
        <Text className="location">{location}</Text>
      </Description>

      <Statlist className="stats">
        <StatItem
          style={{
            borderBottomLeftRadius: '27px',
          }}
        >
          <span className="label">Followers</span>
          <Quantity className="quantity"> {followers}</Quantity>
        </StatItem>
        <StatItem
          style={{
            borderRight: '3px solid black',
            borderLeft: '3px solid black',
          }}
        >
          <span className="label">Views</span>
          <Quantity className="quantity"> {views}</Quantity>
        </StatItem>
        <StatItem
          style={{
            borderBottomRightRadius: '27px',
          }}
        >
          <span className="label">Likes</span>
          <Quantity className="quantity"> {likes}</Quantity>
        </StatItem>
      </Statlist>
    </Card>
  );
};
