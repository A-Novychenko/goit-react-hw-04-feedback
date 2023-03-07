import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsItem>
      <p>Good: {good}</p>
    </StatisticsItem>
    <StatisticsItem>
      <p>Neutral: {neutral}</p>
    </StatisticsItem>
    <StatisticsItem>
      <p>Bad: {bad}</p>
    </StatisticsItem>
    <StatisticsItem>
      <p>Total: {total()}</p>
    </StatisticsItem>
    <StatisticsItem>
      <p>Positive feedback: {positivePercentage()}%</p>
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
