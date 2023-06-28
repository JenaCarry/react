import style from "./style.module.css";

export const Pokemon = ({ name = "nome não encontrado!" }) => (
  <a href="../" className={style.name}>
    {name}
  </a>
);
