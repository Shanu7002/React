import LoginTitle from "../../components/login/LoginTitle.jsx";
import LoginInput from "../../components/login/LoginInput.jsx";
import googleIcon from "../../assets/googleIcon.webp";
import "./register.css";

export default function Register() {
  return (
    <main className="register-container">
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
