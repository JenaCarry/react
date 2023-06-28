import { Pokemon } from "../../components/Pokemon";
import pokeLogo from "../../assets/images/pokemon-logo.png";
import style from "./style.module.css";

export const Home = () => {
  return (
    <div className={style.container}>
      <img className={style.image} src={pokeLogo} alt="Pokemon Logo" />
      <Pokemon name="Pikachu" />
      <Pokemon name="Charmander" />
      <Pokemon name="Squirtle" />
      <Pokemon name="Ditto" />
    </div>
  );
};
