import "./atv11.css";
const Atv11 = () => {
  return (
    <div>
      <h1>Exercício de Tabelas</h1>
      <table>
        <caption>Filmes Favoritos</caption>
        <thead>
          <tr>
            <th scope="col">Grupos</th>
            <th scope="col">Nomes</th>
            <th scope="colgroup">Filmes</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>1000</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th scope="rowgroup">Mulheres</th>
            <td>Ana Maria Santos</td>
            <td>Alien</td>
            <td>Rambo</td>
            <td>Vingadores</td>
          </tr>
          <tr>
            <td>Beatriz Souza</td>
            <td>Hulk</td>
            <td>Inception</td>
            <td>Batman</td>
          </tr>
          <tr>
            <td>Cláudia Melo</td>
            <td>Oblivion</td>
            <td>Matrix</td>
            <td>Big Hero</td>
          </tr>
          <tr>
            <th scope="rowgroup">Homens</th>
            <td>Bruno Mendonça</td>
            <td>Intocáveis</td>
            <td>Amnésia</td>
            <td>Gladiador</td>
          </tr>
          <tr>
            <td>Daniel Lourenço</td>
            <td>Wall-E</td>
            <td>Oldboy</td>
            <td>Dangal</td>
          </tr>
          <tr>
            <td>Fabiano Mota</td>
            <td>Star Wars V</td>
            <td>Taxi Driver</td>
            <td>Toy Story</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Atv11;
