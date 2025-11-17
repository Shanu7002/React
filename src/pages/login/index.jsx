import LoginTitle from "../../components/login/LoginTitle.jsx";
import LoginInput from "../../components/login/LoginInput.jsx";
import googleIcon from "../../assets/googleIcon.webp";
import "./login.css";

export default function Login() {
  return (
    <main className="login-container">
      <LoginTitle />
      <LoginInput />
      <img
        src={googleIcon}
        alt="Google icon"
        width={100}
        style={{ marginTop: 10 }}
      />
    </main>
  );
}
