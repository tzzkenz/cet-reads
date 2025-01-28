import "../components/signup/Signup.css";
import bookImage from "../assets/signup/image.png";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="image-container">
        <img src={bookImage} alt="Book and bookmark" className="signup-image" />
      </div>
      <div className="signup-form-container">
        <h1>Join CETReads</h1>
        <form className="signup-form">
          <label>Username:</label>
          <input type="text" name="username" />

          <label>Mobile number:</label>
          <input type="text" name="mobile" />

          <label>Password:</label>
          <input type="password" name="password" />

          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" />

          <button type="submit">Signup</button>
        </form>
        <p>
          or <a href="/login">Login if you already have an account</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
