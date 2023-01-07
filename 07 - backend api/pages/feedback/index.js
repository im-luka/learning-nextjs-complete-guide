import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = ({ feedbacks }) => {
  const [feedback, setFeedback] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  };

  return (
    <>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async (context) => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbacks: data,
    },
  };
};

export default FeedbackPage;
