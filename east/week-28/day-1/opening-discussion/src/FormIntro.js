import { useEffect, useState } from "react";

const FormIntro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => {
    const splitUsername = e.target.value.split(" ");
    const joinedUsername = splitUsername.join("-");
    setUsername(joinedUsername);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    const currErrors = [];

    if (username.length === 0) currErrors.push("Username required");

    if (currErrors.length) {
      setErrors(currErrors);
      return;
    }

    const payload = { username, password };

    console.log(payload);
  };

  useEffect(() => {
    setErrors([]);
    const currErrors = [];

    if (password.length === 0) currErrors.push("Password required");
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
        <label>
          Username
          <input onChange={handleUsername} />
        </label>

        <label>
          Password
          <input value={password} onChange={handlePassword} />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormIntro;
