import style from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={style.btnBox}>
      <button
        type="button"
        className={style.btnList}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={style.btnList}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={style.btnList}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          className={(style.btnList, style.btnDelete)}
          onClick={() => resetFeedback()}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
