export function YourName({ setName }) {
  return (
    <div>
      <label htmlFor="name">Digite seu nome: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Qual é o seu nome?"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
