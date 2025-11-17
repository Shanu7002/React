import { useNavigate } from "react-router-dom";
import "../../pages/login/login.css";
import "./loginInput.css";

export default function LoginInput() {
  const navigate = useNavigate();

  function handleSubmit(click) {
    click.preventDefault();
    const email = click.target.email.value;
    const password = click.target.password.value;

    console.log("Login: ", email, password);
  }

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
        <input name="login-username" type="email" placeholder="email"></input>
        <p>Password</p>
        <input
          name="login-password"
          type="password"
          placeholder="password"
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
