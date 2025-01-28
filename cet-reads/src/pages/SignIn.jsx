import "../components/signin/Signin.css";
import bookImage from "../assets/signin/image.png";

const SignIn = () => {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>Welcome Back</h1>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="create-account">
          Or <a href="/signup">Create a new account</a>
        </p>
      </div>
      <div className="login-image-container">
        <img src={bookImage} alt="Open book with a scenic view" />
      </div>
    </div>
  );
};

export default SignIn;
