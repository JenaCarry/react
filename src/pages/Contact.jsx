import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Conteúdo da página</p>
      <img src="https://picsum.photos/200" alt="Random" />
      <h1>Página de contatos</h1>
      <ul>
        <li>
          <Link to={"/contact/1"}>Forma de contato: 1</Link>
        </li>
        <li>
          <Link to={"/contact/2"}>Forma de contato: 2</Link>
        </li>
        <li>
          <Link to={"/contact/3"}>Forma de contato: 3</Link>
        </li>
      </ul>
    </div>
  );
}
