import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/onChange";
import "../../pages/register/register.css";
import "./registerStyle.css";

export default function RegisterInput() {
  const navigate = useNavigate();
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault(); //prevent page reload

    //all my register logic here
    console.log("Register: ", name.value, email.value, password.value);
  }

  function goToLogin() {
    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit} className="register-forms">
      <p>Name</p>
      <input
        name="register-name"
        type="text"
        placeholder="name"
        {...name}
      ></input>
      <p>Email</p>
      <input
        name="register-email"
        type="email"
        placeholder="email"
        {...email}
      ></input>
      <p>Password</p>
      <input
        name="register-password"
        type="password"
        placeholder="password"
        {...password}
      ></input>
      <p>Confirm your password</p>
      <input
        name="register-password"
        type="password"
        placeholder="confirm your password"
      ></input>
      <div className="register-backtologin">
        <a onClick={goToLogin}>Alredy have an account?</a>
      </div>
      <div className="register-buttons">
        <button
          type="button"
          onClick={handleSubmit}
          className="register-registerButton"
        >
          Register
        </button>
      </div>
    </form>
  );
}
