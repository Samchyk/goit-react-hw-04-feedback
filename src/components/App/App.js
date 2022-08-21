import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import { useState } from 'react';
import s from './App.module.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [{ good, neutral, bad }, setState] = useState(INITIAL_STATE);

  const countPositiveFeedbackPercentage = () => {
    const feedback = (good * 100) / (good + neutral + bad);
    return Math.round(feedback) || 0;
  };

  const leaveFeedback = name => {
    setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () => good + neutral + bad;

  return (
    <div className={s.main}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(INITIAL_STATE)}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
