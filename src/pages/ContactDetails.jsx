import { useParams, useNavigate } from "react-router-dom";

export function ContactDetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleContact = () => {
    return navigate("/contact");
  };

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContact}>Retornar para Contatos</button>
    </div>
  );
}
