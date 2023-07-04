export function Greetings({ name }) {
  function generateGreetings(someName) {
    return `Olá, ${someName}, tudo bem?`;
  }

  return <div>{name && <p>{generateGreetings(name)}</p>}</div>;
}
