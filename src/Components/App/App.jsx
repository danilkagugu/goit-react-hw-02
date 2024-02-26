import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import "./App.css";
import { useState } from "react";

function App() {
  // Тут використовуй сеттер, щоб оновити стан
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setClicks((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback <= 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
}

export default App;
