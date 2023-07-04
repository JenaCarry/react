import { useState } from "react";

export function Conditional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function submitEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log({ email });
  }

  function clearInput() {
    document.querySelector("input[type=email]").value = "";
    setUserEmail("");
  }

  return (
    <div>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <label htmlFor="userEmail"></label>
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={submitEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={clearInput}>Reset</button>
          </div>
        )}
      </form>
    </div>
  );
}
