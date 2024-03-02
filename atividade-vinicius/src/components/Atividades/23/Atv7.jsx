import "./atv7.css";

const Atv7 = () => {
  return (
    <>
      <h1>Atividade 7</h1>
      <p>Esse background-repeat não funcionou corretamente, eu tentei arrumar...</p>
      <br />
      <div>
        <h1>Repetições em background-image</h1>
        <h2>background-repeat: repeat;</h2>
        <p>
          Repete a imagem tanto no sentido vertical, quanto horizontal (padrão).
        </p>
        <div className="background-area area001"></div>
        <h2>background-repeat: repeat-x;</h2>
        <p>Repete apenas no eixo horizontal.</p>
        <div className="background-area area002"></div>
        <h2>background-repeat: repeat-y;</h2>
        <p>Repete apenas no eixo vertical.</p>
        <div className="background-area area003"></div>
        <h2>background-repeat: no-repeat;</h2>
        <p>Não repete em nenhum eixo. A imagem só é carregada uma única vez.</p>
        <div className="background-area area004"></div>
      </div>
    </>
  );
};

export default Atv7;
