import style from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul className={style.statistics}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive Feedback: <span>{positiveFeedback}%</span>
      </li>
    </ul>
  );
}
