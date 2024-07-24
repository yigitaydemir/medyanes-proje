import { useState, useContext } from "react";

const App = () => {
  const [username, setUsername] = useState();

  return (
    <div className="border-2 border-black p-10 m-5">
      This is the App Component
      <Login setUsername={setUsername}></Login>
      <User username={username}></User>
    </div>
  );
};

export default App;

export const Login = ({ setUsername }) => {
  return (
    <div className="border-2 border-black p-10 flex flex-col m-5">
      This is Login Component
      <div>
        <label htmlFor="">Username: </label>
        <input
          className="border-black border-2"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export const User = ({ username }) => {
  return (
    <div className="border-2 border-black p-10 m-5">
      This is User Component
      <h1>User: {username}</h1>
    </div>
  );
};
