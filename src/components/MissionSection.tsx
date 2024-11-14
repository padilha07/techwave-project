import "./MissionSection.css";

export function MissionSection() {
  return (
    <section className="mission-section">
      <h2>Construa o futuro conosco</h2>
      <p>
        Nossa missão é ser a empresa mais centrada no cliente do mundo. Isso é o que une nossos colaboradores em todas as equipes e geografias, enquanto todos nós nos esforçamos para encantar nossos clientes e facilitar suas vidas, com um produto, serviço ou ideia inovadora de cada vez.
      </p>
      <p>
        Interessado em se juntar a nós? Clique no botão abaixo para preencher o formulário de inscrição e dar o primeiro passo em sua carreira com a TechWave.
      </p>
      <button className="learn-more-button" onClick={() => window.location.href = '/formulario'}>
        Preencha o Formulário de Inscrição
      </button>
    </section>
  );
}
