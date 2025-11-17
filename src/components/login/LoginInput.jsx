import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/onChange";
import "../../pages/login/login.css";
import "./loginInput.css";

export default function LoginInput() {
  const navigate = useNavigate();

  // hooks
  const email = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault(); //prevent page reload

    //all my login logic here
    console.log("Login: ", email.value, password.value);
  }

  //just some router things
  function goToRegister() {
    navigate("/register");
  }
  function goToForgotPassword() {
    navigate("/forgotPassword");
  }

  return (
    <div className="formsLogin-forgotPassword">
      <form onSubmit={handleSubmit} className="login-forms">
        <p>Email</p>
        <input
          name="login-username"
          type="email"
          placeholder="email"
          {...email}
        ></input>
        <p>Password</p>
        <input
          name="login-password"
          type="password"
          placeholder="password"
          {...password}
        ></input>
        <div className="login-forgotPassword">
          <a onClick={goToForgotPassword}>Forgot password?</a>
        </div>
        <div>
          <button type="submit" className="login-loginButton">
            Login
          </button>
          <button
            type="button"
            onClick={goToRegister}
            className="login-registerButton"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
