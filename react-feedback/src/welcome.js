import React from "react";

function Welcome({ setUser }) {
  const [name, setName] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setUser(name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Your name</label>
      <br />
      <input
        type="text"
        placeholder="Put your name"
        onChange={handleChange}
        required="required"
      />
      <input type="submit" value="Next" />
    </form>
  );
}

export default Welcome;
