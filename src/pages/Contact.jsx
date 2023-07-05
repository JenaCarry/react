import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Conteúdo da página</p>
      <img src="https://picsum.photos/200" alt="Random" />
      <h1>Página de contatos</h1>
      <ul>
        <li>
          <Link to={"/contact/1"}>
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link to={"/contact/2"}>
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to={"/contact/3"}>
            <FaLinkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
}
