import RegisterTitle from "../../components/register/RegisterTitle.jsx";
import RegisterInput from "../../components/register/RegisterInput.jsx";
import googleIcon from "../../assets/googleIcon.webp";
import "./register.css";

export default function Register() {
  return (
    <main className="register-container">
      <RegisterTitle />
      <RegisterInput />
      <img
        src={googleIcon}
        alt="Google icon"
        width={100}
        style={{ marginTop: 10 }}
      />
    </main>
  );
}
