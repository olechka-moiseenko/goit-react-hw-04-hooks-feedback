import React, { useState } from "react";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.js";
import Statistics from "./components/Statistics/Statistics.js";
import Notification from "./components/Notification/Notification.js";
import Section from "./components/Section/Section.js";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        break;
    }
  };

  let options = { good, neutral, bad };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  );
}

export default App;
