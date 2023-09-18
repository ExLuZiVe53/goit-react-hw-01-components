import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  width: 410px;
  margin: 40px auto;
  margin-bottom: 50px;
  text-align: center;

  border-radius: 8px;
  box-shadow: 2px;
`;
const Description = styled.div`
  background-color: #fff;
  padding: 30px 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 3px solid black;
  border-bottom: none;
`;
const Photo = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 2px solid #71142a;
  padding: 10px;
`;
const Name = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 24px;
  color: rgba(149, 137, 137, 0.803);
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Statlist = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 3px solid black;
`;
const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  background-color: #e7e0e0;
  padding: 18px;
  color: grey;
`;
const Quantity = styled.span`
  font-weight: bold;
  color: cadetblue;
`;

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
          <Quantity className="quantity">{followers}</Quantity>
        </StatItem>
        <StatItem
          style={{
            borderRight: '3px solid black',
            borderLeft: '3px solid black',
          }}
        >
          <span className="label">Views</span>
          <Quantity className="quantity">{views}</Quantity>
        </StatItem>
        <StatItem
          style={{
            borderBottomRightRadius: '27px',
          }}
        >
          <span className="label">Likes</span>
          <Quantity className="quantity">{likes}</Quantity>
        </StatItem>
      </Statlist>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
