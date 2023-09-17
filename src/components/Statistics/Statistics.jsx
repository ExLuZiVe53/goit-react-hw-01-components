import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor';

const Section = styled.section`
  background-color: #fff;
  width: 600px;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
`;
const TitleUploadStats = styled.h2`
  padding: 60px;
  color: gray;
`;

const ListStats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: red;
  margin: 0;
  padding: 10px;
`;

const LabelStats = styled.span`
  font-size: 24px;
  color: white;
`;
const Percentage = styled.span`
  color: white;
`;

export const StatisticsList = ({ data }) => {
  return (
    <Section className="statistics">
      <TitleUploadStats className="title">Upload Stats</TitleUploadStats>
      <ListStats className="stat-list">
        {data.map(data => {
          let randomColor = getRandomHexColor();
          return (
            <ItemStats
              key={data.id}
              style={{
                backgroundColor: randomColor,
              }}
            >
              <LabelStats className="label">{data.label}</LabelStats>
              <Percentage className="percentage">{data.percentage}%</Percentage>
            </ItemStats>
          );
        })}
      </ListStats>
    </Section>
  );
};
