import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>Kreirajte nalog</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
          <Link to="/login">Imate nalog?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/realestate.jpg" alt="" />
      </div>
    </div>
  );
}

export default Register;