const Feedback = ({ good, neutral, bad, total, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%</li>
    </ul>
  );
};

export default Feedback;
