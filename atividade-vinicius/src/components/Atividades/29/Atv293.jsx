import "./atv293.css"

const Atv293 = () => {
  return (
    <div>
      <h1>Cores em CSS</h1>
      <p>
        Para entender esse exercício, olhe bem atentamente o código fonte do
        arquivo.
      </p>
      <h2 className="corpornome">
        Este título está colorido usando cores por nome
      </h2>
      <h2 className="corhexa">
        Já esse está usando cores pelo código Hexadecimal
      </h2>
      <h2 className="corporgb">
        Este outro está colorido usando códigos RGB (red, green, blue)
      </h2>
      <h2 className="corporhsl">
        Este outro aqui está usando códigos HSL (hue, saturation, light)
      </h2>
      <p>
        As cores resultantes são exatamente as mesmas, mas o formato de
        representação muda conforme o padrão escolhido.
      </p>
      <p>
        Também é possível usar transparência, usando o formato RGBA (red, green,
        blue, alpha)
      </p>
      <h2 className="cinquenta">
        Nesse título, o fundo azul teve sua transparência configurada para 50%
      </h2>
    </div>
  );
};

export default Atv293;
