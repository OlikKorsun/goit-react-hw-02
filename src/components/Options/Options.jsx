import css from './Options.module.css'

export default function Options({updateFeedback, totalFeedback, resetFeedback}) {
    return (
        <div className={css.allButtons}>
            <button className={css.buttonOptions} onClick={() => updateFeedback('good')}>Good</button>
            <button className={css.buttonOptions} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.
            buttonOptions} onClick={() => updateFeedback('bad')}>Bad</button>
            {(totalFeedback > 0) && <button className={css.buttonOptions} onClick={resetFeedback}>Reset</button>}
        </div>
    )
}