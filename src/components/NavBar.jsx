import "./NavBar.module.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <h1>
        <Link to={"/"}>Logo</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={"/props"}>Props</Link>
          </li>
          <li>
            <Link to={"/list"}>List</Link>
          </li>
          <li>
            <Link to={"/event"}>Event</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
