import React from "react";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dubitare</h1>
      <h2 className={styles.subtitle}>
        Bem vindo ao portfólio de Matheus Vitor
      </h2>
      <p>
        Essa página será focada na exploração de dados relevantes para o meu
        crescimento profissional e possívelmente para o seu negócio!
        <br />
        Atualmente em construção...
      </p>
      <img
        className={styles.image}
        src="/images/programador_em_construcao.jpg"
        alt="Programador construindo o site"
      />
    </div>
  );
}

export default Home;
