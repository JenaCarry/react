import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <h1>
        <Link to={"/"}>Inicio</Link>
      </h1>
      <nav>
        <div>
          <Link to={"/props"}>Props</Link>
        </div>
        <div>
          <Link to={"/list"}>List</Link>
        </div>
        <div>
          <Link to={"/event"}>Event</Link>
        </div>
        <div>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </nav>
    </div>
  );
}
