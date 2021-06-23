export const Login = (props) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={props.handleLogin}>
        <input
          placeholder="user name"
          onChange={(e) => {
            props.handleUsername(e.target.value);
          }}
          type="text"
        ></input>
        <input
          placeholder="password"
          onChange={(e) => {
            props.handlePassword(e.target.value);
          }}
          type="password"
        ></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
};
