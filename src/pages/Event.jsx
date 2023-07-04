import { Events } from "../components/Events";
import { Form } from "../components/Form";
import { Conditional } from "../components/Conditional";

export function Event() {
  return (
    <div>
      <Events />
      <Form />
      <Conditional />
    </div>
  );
}
