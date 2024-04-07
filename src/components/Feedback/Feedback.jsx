import css from './Feedback.module.css'

export default function Feedback({ countFeedback, totalFeedback, percentPositiveFeedback }) {
    return (
        <div className={css.listFeedback}>
            <p>Good: {countFeedback.good}</p>
            <p>Neutral: {countFeedback.neutral}</p>
            <p>Bad: {countFeedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {percentPositiveFeedback}%</p>
        </div>
    ) 
}
