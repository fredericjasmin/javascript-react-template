import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></p>
      <p><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></p>
      <p><NavLink to="/help" className={({ isActive }) => (isActive ? "active" : "")}>Help</NavLink></p>
    </div>
  );
}
