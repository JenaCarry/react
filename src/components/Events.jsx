import { Button } from "./Button";

export function Events() {
  function firstEvent() {
    console.log("Opa, você clicou no Primeiro Evento.");
  }

  function secondEvent() {
    console.log("Opa, você clicou no Segundo Evento.");
  }

  return (
    <>
      <p>Clique para disparar um evento no console:</p>
      <Button event={firstEvent} text="Primeiro Evento" />
      <Button event={secondEvent} text="Segundo Evento" />
    </>
  );
}
