import {
  Section,
  ListStats,
  ItemStats,
  TitleUploadStats,
  LabelStats,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';
import PropTypes from 'prop-types';

export const StatisticsList = ({ data }) => {
  return (
    <Section className="statistics">
      <TitleUploadStats className="title">Upload stats</TitleUploadStats>
      <ListStats className="stat-list">
        {data.map(dat => {
          let randomColor = getRandomHexColor();
          return (
            <ItemStats
              key={dat.id}
              style={{
                backgroundColor: randomColor,
              }}
            >
              <LabelStats className="label"> {dat.label}</LabelStats>
              <Percentage className="percentage"> {dat.percentage}%</Percentage>
            </ItemStats>
          );
        })}
      </ListStats>
    </Section>
  );
};
