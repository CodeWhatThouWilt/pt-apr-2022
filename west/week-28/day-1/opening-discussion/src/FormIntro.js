import { useState, useEffect } from "react";

const FormIntro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => {
    const splitUsername = e.target.value.split(" ");
    const joined = splitUsername.join("-");
    setUsername(joined);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currErrors = [];

    if (!username.length) currErrors.push("Username required");

    if (currErrors.length) {
      setErrors(currErrors);
      return;
    }

    const payload = { username, password };
    console.log("SENDING TO THE SERVER", payload);
  };

  useEffect(() => {
    const currErrors = [];

    if (!password.length) currErrors.push("Password required");
    if (password.length > 20) currErrors.push("Password too long");

    setErrors(currErrors);
  }, [password]);

  return (
    <div>
      <ul>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={handleUsername} />
        </div>
        <div>
          <label>Password</label>
          <input value={password} onChange={handlePassword} />
        </div>
        <button disabled={errors.length}>Submit</button>
      </form>
    </div>
  );
};

export default FormIntro;
