import "./atv4.css";

const Atv4 = () => {
  return (
      <>
        <h1>Atividade 4</h1>
      <div className="container"> 
        <br />
        <h1>Classes em CSS</h1>
            <p className="padrao">
              Para evitar o stress do último exercício, onde tive que ficar inventando
              textos, vou pegar aqui um texto que foi copiado de um site de notícias
              &#x1F605;
            </p>
      
            <h2>Amazon lança sua própria distribuição Linux</h2>
      
            <p className="padrao">
              A gigante de comércio Amazon surpreende mais uma vez e lança uma
              distribuição Linux própria. O novo sistema operacional de código aberto
              é chamado Bottlerocket. Porém, muita calma nessa hora. Antes de se
              empolgar com a distro e tentar fazer a instalação você precisa saber que
              ela não funciona da mesma forma que outras ‘normais’ como Ubuntu, Debian
              ou Fedora.
            </p>
  
        <h3>
          Conheça a Bottlerocket: distribuição Linux da Amazon para execução de
          contêineres
        </h3>
  
        <p className="dir">
          Muita coisa mudou no setor de TI desde que o termo computação em nuvem
          foi cunhado pela primeira vez. Demora alguns segundos para implantar um
          servidor Linux (geralmente executando em uma VM), graças a provedores de
          servidores em nuvem como Amazon AWS, Google, Linode, Digital Ocean etc.
          Além disso, você pode implantar aplicativos e serviços nesses servidores
          na forma de recipientes graças a ferramentas como Docker e Kubernetes.
        </p>
  
        <p>
          O problema é que, quando seu único objetivo é executar contêineres em um
          sistema Linux, nem sempre é necessária uma distribuição Linux completa.
          É por isso que existem sistemas específicos para contêineres que
          fornecem apenas os pacotes necessários. Isso reduz drasticamente o
          tamanho do sistema operacional e o tempo de implantação. O Bottlerocket
          Linux é desenvolvido especificamente pela Amazon Web Services para
          executar contêineres em máquinas virtuais ou hosts bare metal. Ele
          suporta docker images além de outras que seguem o formato de imagem OCI.
        </p>
  
        <h3>Recursos do Bottlerocket Linux</h3>
  
        <p className="especial">
          Nenhuma atualização pacote por pacote. O procedimento tradicional de uma
          distribuição Linux é composto pela atualização de pacotes individuais.
          Bottlerocket usa atualizações baseadas em imagem. Graças a essa
          abordagem, conflitos e quebras são evitados com a possibilidade de uma
          reversão rápida e completa (se necessário). Sistema de arquivos somente
          leitura. O Bottlerocket também usa um sistema de arquivos somente
          leitura. Sua integridade é verificada no momento da inicialização via
          dm-verity. Para medidas de segurança adicionais, o acesso SSH também é
          desencorajado e só está disponível através do contêiner de administrador
          (mecanismo adicional).
        </p>
  
        <h3>Atualizações automatizadas</h3>
  
        <p className="meio especial">
          Você pode automatizar as atualizações do Bottlerocket usando um serviço
          de orquestração como o Amazon EKS. A Amazon também afirma que incluir
          apenas o software essencial para executar contêineres reduz o número de
          ataques em comparação com as distribuições Linux de uso geral.
        </p>
  
        <h3>O que você acha?</h3>
  
        <p className="esq">
          A Amazon não é a primeira a criar um ‘Linux específico para
          contêineres’. O CoreOS foi uma das primeiras distribuições desse tipo. O
          CoreOS foi adquirido pela Red Hat, que foi vendida para a IBM. A Red Hat
          recentemente interrompeu o CoreOS e o substituiu pelo Fedora CoreOS. O
          servidor em nuvem é uma grande indústria que continuará a crescer. Um
          gigante como a Amazon fará de tudo para ficar à par ou à frente de seus
          concorrentes. Na minha opinião, Bottlerocket é uma resposta para (agora)
          o Fedora CoreOS da IBM. Embora os repositórios Bottlerocket estejam
          disponíveis no GitHub , ainda não é possível achar um pronto para criar
          imagens. No momento, ele está disponível apenas como uma prévia na AWS.
        </p>
      </div>
      </>
  );
};

export default Atv4;
