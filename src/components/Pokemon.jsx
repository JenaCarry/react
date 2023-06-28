import "./style.css";

export const Pokemon = ({ name = "nome não encontrado!" }) => (
  //   return <h2>Nome do pokemon: {name || "nome não encontrado!"}</h2>;
  //   return <h2>Nome do pokemon: {name ? name : "nome não encontrado!"}</h2>;
  <h2 className="title">Nome do pokemon: {name}</h2>
);
