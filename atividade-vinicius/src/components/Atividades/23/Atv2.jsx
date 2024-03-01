import "./atv2.css";
const Atv2 = () => {
  return (
    <div>
      <h1> Atividade 2</h1>
      <br />
      <h1>Alinhamento de textos usando CSS</h1>
      <p className="esquerda">
        Este primeiro parágrafo terá o alinhamento padrão, à esquerda.
      </p>
      <p className="direita">O segundo parágrafo ficará alinhado à direita.</p>
      <p className="centro">
        O terceiro parágrafo terá alinhamento centralizado.
      </p>
      <p className="justificar">
        O último parágrafo terá o alinhamento justificado. Para que você perceba
        isso, terei que colocar um texto um pouco maior. Caso você não perceba
        que o alinhamento está sendo feito nas duas laterais, tente diminuir um
        pouco o tamanho do seu navegador. Esse tipo de alinhamento é bastante
        utilizado para textos longos e grandes parágrafos, para dar uma sensação
        de simetria. Agora eu já não sei mais o que escrever, mas vou continuar
        para que seu texto fique grande o suficiente para que você possa ver o
        alinhamento justificado. Nunca pensei que seria tão difícil ficar
        escrevendo coisas sem sentido só pra que uma explicação faça um sentido
        mínimo. Já chega, pra mim já deu! Espero que você tenha conseguido
        entender.{" "}
      </p>
    </div>
  );
};

export default Atv2;
