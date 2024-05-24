import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Dobrodošli!</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">{"Nemate"} profil?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/realestate.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;