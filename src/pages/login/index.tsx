import "./style.css";
import BackgroundImg from "../../components/background";

export default function Login() {
  return (
    <>
      <BackgroundImg />
      <div className="container">
        <div className="form-group">
          <label>Email/Username</label> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email/Username...."
          />
        </div>
        <div className="form-group">
          <label>Password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
          />
        </div>
        <a href="#">Forgot Password?</a> <br />
        <button type="submit">Log In</button>
        <button type="submit">Create Account</button>
      </div>
    </>
  );
}
