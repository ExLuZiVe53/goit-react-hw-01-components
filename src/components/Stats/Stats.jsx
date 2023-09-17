import styled from 'styled-components';

const StyledStats = styled.table``;

export const Stats = props => {
  return (
    <table className="stats">
      <thead>
        <tr>
          <th className="label">Followers</th>
          <th className="label">Views</th>
          <th className="label">Likes</th>
        </tr>
      </thead>
      <tbody>
        <td className="followers">{props.followers}</td>
        <td className="views">{props.views}</td>
        <td className="likes">{props.likes}</td>
      </tbody>
    </table>
  );
};
