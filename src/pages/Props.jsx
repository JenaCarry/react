import { useState } from "react";
import { Greetings } from "../components/Greetings";
import { People } from "../components/People";
import { SayMyName } from "../components/SayMyName";
import { YourName } from "../components/YourName";

export function Props() {
  const [name, setName] = useState();

  return (
    <div>
      <SayMyName name="Jean" />
      <People
        imageId={"https://picsum.photos/200"}
        name={"Jean"}
        age={24}
        profession={"Estudante"}
      />
      <YourName setName={setName} />
      <Greetings name={name} />
    </div>
  );
}
