import styles from "./People.module.css";

export function People({ imageId, name, age, profession }) {
  return (
    <div className={styles.container}>
      <img src={imageId} alt={name} className={styles.image} />
      <p>Nome: {name}</p>
      <p>Age: {age}</p>
      <p>Profissão: {profession}</p>
    </div>
  );
}
