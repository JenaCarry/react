import { useState } from "react";
import { Button } from "./Button";

export function Form() {
  function registerUser(e) {
    e.preventDefault();
    console.log({ name, password, email });
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div>
      <h2>Meu Cadastro</h2>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Button event={registerUser} text="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
