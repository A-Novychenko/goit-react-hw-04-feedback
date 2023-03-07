import { useState } from 'react';
import { GlobalStyle } from '../../constants/GlobalStyle';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClickBtn = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((acc, value) => value + acc, 0);

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = Math.round((state.good / total) * 100);
    return total > 0 ? percentage : 0;
  };

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleClickBtn}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onClick={handleClickBtn}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>

      <GlobalStyle />
    </Container>
  );
};
