import "./atv5.css";

const Atv5 = () => {
  return (
    <div>
      <h1>Atividade 5</h1>
      <br />

      <h1>Identificadores em CSS</h1>
      <p>
        No exercício anterior, vimos as <mark>classes</mark> e entendemos que
        vários elementos podem ter uma mesma classe. Mas se quisermos{" "}
        <mark>identificar</mark> os elementos, dando um nome específico para
        cada um, podemos usar os IDs. Em um mesmo documento,{" "}
        <strong>não podemos ter dois elementos com o mesmo ID!</strong>
      </p>

      <>
          <div id="area01"></div>
          <div id="area02"></div>
          <div id="area03"></div>
          <div id="area04"></div>
          <div id="area05"></div>
      </>
    </div>
  );
};

export default Atv5;
