export function AnotherItems({ items }) {
  return (
    <>
      <h3>Minha Lista</h3>
      {items.length > 0 ? (
        items.map((item, index) => (
          <p key={index}>
            {index} - {item}
          </p>
        ))
      ) : (
        <p>Não há itens na lista!</p>
      )}
    </>
  );
}
