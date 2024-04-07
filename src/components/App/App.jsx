import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

export default function App() {

  const defaultFeedback = {
        good: 0,
        neutral: 0,
        bad: 0
  }

  const [countFeedback, setCountFeedback] = useState(() => {
    
    const savedFeedback = window.localStorage.getItem("savedFdBk");
    return (savedFeedback !== null) ? JSON.parse(savedFeedback) : defaultFeedback}
    );
  
  useEffect(() => {
    window.localStorage.setItem("savedFdBk", JSON.stringify(countFeedback));
    }, [countFeedback]);

  const updateFeedback = feedbackType => {
    setCountFeedback(prevCountType => ({
      ...prevCountType,
      [feedbackType]: prevCountType[feedbackType] + 1,
    }));
  };

  const totalFeedback = countFeedback.good + countFeedback.neutral + countFeedback.bad;

  const percentPositiveFeedback = Math.round((countFeedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setCountFeedback(defaultFeedback);
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {(totalFeedback>0) ? <Feedback countFeedback={countFeedback} totalFeedback={totalFeedback} percentPositiveFeedback={percentPositiveFeedback}/> : <Notification/>}
    </>
  )
}


