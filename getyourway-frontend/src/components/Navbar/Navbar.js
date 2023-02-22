import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Sky.png";
import header from '../images/Skyheader.png';

const Navbar = () => {
  return (
  <header>
    <img src={header} className='skyHeader' alt='skyheader'/>
    <nav className="navbar">
      <img src={logo} className='skylogo' width="70px" alt='sky logo'/>
      <h1>GetYourWay</h1>
      <div className="links">
        {/* 'Link' replaces '<a>' tags and 'to' replaces 'href' tages. when inspecting the page '<a>' & 'href' will still be shown' */}
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
        <Link
          to="/"
          style={{
            color: "white",
            backgroundColor: "rgb(4, 52, 134)",
            borderRadius: "6px",
          }}
        >
          Login/Signup
        </Link>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
