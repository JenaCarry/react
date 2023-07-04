import { AnotherItems } from "../components/AnotherItems";
import { Items } from "../components/Items";

export function List() {
  const myItems = ["React", "Vue", "Angular"];

  return (
    <>
      <h2>Minha Lista</h2>
      <ul>
        <Items marca={"Ferrari"} anoLancamento={1985} />
        <Items marca={"Fiat"} anoLancamento={1964} />
      </ul>
      <AnotherItems items={myItems} />
      <AnotherItems items={[]} />
    </>
  );
}
