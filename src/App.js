import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}
