import React from "react";

function Feedback({ setFeedback, feedback }) {
  const [name, setName] = React.useState("");
  const [workTogether, setWorkTogether] = React.useState("");
  const [reason, setReason] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback(
      feedback.concat({
        name: name,
        workTogether: workTogether,
        reason: reason
      })
    );
    e.target.reset();
  }

  function handleChange(e) {
    console.log(e.target);
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "reason":
        setReason(e.target.value);
        break;
      case "workTogether":
        setWorkTogether(e.target.value);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Partner name</label>
      <br />
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Put they name"
        onChange={handleChange}
        required="required"
      />
      <br />
      <br />
      <fieldset>
        <legend>Do you want to work with they in the future?</legend>
        <input
          type="radio"
          id="yes"
          value="true"
          name="future"
          required="required"
          onChange={handleChange}
        />
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          id="no"
          value="false"
          name="future"
          required="required"
          onChange={handleChange}
        />
        <label htmlFor="no">No</label>
      </fieldset>
      <br />
      <label htmlFor="explain">Why?</label>
      <br />
      <textarea
        name="reason"
        placeholder="Explain your answer please"
        id="explain"
        onChange={handleChange}
        required="required"
      />
      <br />
      <br />
      <input type="submit" value="Next" />
    </form>
  );
}

export default Feedback;
