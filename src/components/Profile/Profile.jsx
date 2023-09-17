import styled from 'styled-components';
import { Stats } from 'components/Stats/Stats';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledDescription = styled.div``;

const StyledAvatar = styled.img`
  width: 200px;
`;

const StyledName = styled.h1`
  font-size: 24px;
`;

const StyledTag = styled.p`
  font-size: 18px;
  color: grey;
`;

const StyledLocation = styled.p`
  font-size: 18px;
  color: grey;
`;

export const Profile = props => {
  return (
    <StyledProfile className="profile">
      <StyledDescription className="description">
        <StyledAvatar src={props.avatar} alt="User avatar" className="avatar" />
        <StyledName className="name">{props.username}</StyledName>
        <StyledTag className="tag">{props.tag}</StyledTag>
        <StyledLocation className="location">{props.location}</StyledLocation>
      </StyledDescription>
      <Stats />
    </StyledProfile>
  );
};

// export const Profile = props => {
//   const {
//     username,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = props;
//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={avatar} alt="User avatar" className="avatar" />
//         <p className="name">{username}</p>
//         <p className="tag">{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };
