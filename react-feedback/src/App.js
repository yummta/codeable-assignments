import React from "react";
import Welcome from "./welcome";
import Feedback from "./feedback";

function App() {
  const [user, setUser] = React.useState("");
  const [feedback, setFeedback] = React.useState([]);

  if (!user)
    return (
      <>
        <h1>Who are you?</h1>
        <Welcome setUser={setUser} />
      </>
    );

  if (feedback.length < 3)
    return (
      <>
        <h1>Give your feedback</h1>
        <Feedback setFeedback={setFeedback} feedback={feedback} />
      </>
    );
  return (
    <>
      <h3>Thanks {user}, your feedback is</h3>
      {feedback.map(element => (
        <ul>
          <li>name: {element.name}</li>
          <li>work together: {element.workTogether}</li>
          <li>reason: {element.reason}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
