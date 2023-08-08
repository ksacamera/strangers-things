import { useState } from "react";

const COHORT_NAME = "2306-FSA-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try{
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        body: JSON.stringify({
          user: {
          username, 
          password
        }
        }),
        headers : {
          "Content-Type":"application/json"
        }
      });
      const data = await response.json();
      console.log(data)
      props.setToken(data.token);
    }
    catch(err){
      setError(err.message);
    }

  }

  return (
    <>
      <h2>Sign Up</h2>

      {error && <p>Error: </p> }

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUp;
