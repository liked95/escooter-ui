import "./style.css";
import BackgroundImg from "../../components/background";

export default function Register() {
  return (
    <>
      <BackgroundImg />
      <div className="container">
        <form action="/action_page.php">
          <h1>Register Here</h1>

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
            <br />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
}
