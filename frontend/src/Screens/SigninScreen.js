import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";

const SigninScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  console.log(userSignin);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, [userInfo]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2 className="text-center">Sing-In</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit" className="button primary">
              Sign in
            </button>
          </li>
          <li>New here?</li>
          <li>
            <Link to="/register" className="button secondary text-center">
              Create account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninScreen;
