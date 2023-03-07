import styled from 'styled-components';

export const StatisticsList = styled.ul`
  text-align: left;
  font-size: 20px;
  width: 248px;
`;

export const StatisticsItem = styled.li`
  padding: 8px;

  &:nth-last-child(-n + 2) {
    font-weight: 500;
  }
`;
