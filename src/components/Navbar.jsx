import React  from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
const Navbar = () => {

  const location = useLocation();
  return (
    <div className="header">
      <div className="nav-menu">
      <nav className=" nav-menu navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className=" mt-0 container-fluid container">
    <Link className="navbar-brand" to="/">
     <h1 className="co-name"><i className="fas fa-dumbbell"></i>BEAST</h1>
     <h6 className="co-name" style={{color: "cyan", marginTop: "-10px"}}>CROSSFIT & FITNESS</h6>

    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'? "active" : " "}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about"? "active": " "}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className = {`nav-link ${location.pathname === "/classes"? "active": " "}`} to="/classes">Classes</Link>
        </li>
        <li className="nav-item">
          <Link className = {`nav-link ${location.pathname === "/gallery"? "active": " "}`} to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className= {`nav-link ${location.pathname === "/schedule"? "active": " "}`} to="/schedule">Schedule</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/blog"? "active": " "}`} to="/blog">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/contact"? "active": " "}`} to="/contact">Contact</Link>
        </li>


      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  );
};

export default Navbar;
