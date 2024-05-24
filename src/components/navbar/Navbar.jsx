import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo1.png" alt="" />
        </a>
        <a href="/">Početna</a>
        <a href="/">O nama</a>
        <a href="/">Kontakt</a>
        <a href="/">Agenti</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="/profile.jpg"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Nalog</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="/">Početna</a>
        <a href="/">O nama</a>
        <a href="/">Kontakt</a>
        <a href="/">Agenti</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;