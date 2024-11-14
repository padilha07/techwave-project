export function Header() {
  return (
    <header className="header">
      <div className="logo">TechWave<span className="logo-highlight">jobs</span></div>
      <nav className="nav">
        <a href="#oportunidades">Oportunidades de Carreira <span className="dropdown-icon">▼</span></a>
        <a href="#pesquisa">Buscar Vagas<span className="dropdown-icon">▼</span></a>
        <a href="#conta">Minha Conta <span className="dropdown-icon">▼</span></a>
        <a href="#busca" className="search-icon">🔍</a>
      </nav>
    </header>
  );
}
