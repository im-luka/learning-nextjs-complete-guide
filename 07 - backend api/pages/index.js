import { useRef, useState } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [feedback, setFeedback] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    const reqBody = { email, feedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input ref={emailRef} type="email" id="email" />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea ref={feedbackRef} id="feedback" rows="5"></textarea>
        </div>

        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedback.map((feedback) => (
          <li key={feedback.id}>{feedback.feedback}</li>
        ))}
      </ul>
    </div>
  );
}
