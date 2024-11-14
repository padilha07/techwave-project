import './ExploreOpportunities.css';

export function ExploreOpportunities() {
  return (
    <section className="explore-opportunities">
      <h2>Explore oportunidades</h2>
      <div className="opportunity-cards">
        <div className="opportunity-card">
          <img src="https://static.amazon.jobs/global_images/36/images/Teams_3_copy.jpg?1540850190" alt="Teams" />
          <h3>Equipes</h3>
          <p>Conheça nossas equipes, desde desenvolvimento até operações.</p>
          <a href="#teams">Veja todas as equipes</a>
        </div>
        <div className="opportunity-card">
          <img src="https://static.amazon.jobs/global_images/34/images/job-categories-900x600.jpg?1647704396" alt="Job Categories" />
          <h3>Categorias de Emprego</h3>
          <p>Encontre a oportunidade certa para você entre nossas áreas.</p>
          <a href="#job-categories">Veja todas as categorias de emprego</a>
        </div>
        <div className="opportunity-card">
          <img src="https://static.amazon.jobs/global_images/32/images/Location_copy.jpg?1540849565" alt="Locations" />
          <h3>Localizações</h3>
          <p>Veja nossos escritórios e locais de atuação pelo mundo.</p>
          <a href="#locations">Veja todas as localizações</a>
        </div>
      </div>
    </section>
  );
}
