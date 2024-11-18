import { useState } from 'react'; 
import "./Footer.css";

export function Footer() {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-media">
          <p>Junte-se a nós em</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/InsideAmazon/?Amazon.jobs=footer" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/company/amazon?Amazon.jobs=footer" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/insideamazon/?Amazon.jobs=footer" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/amazonnews?Amazon.jobs=footer" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Carreiras</h4>
            <a href="#">Categorias de Emprego</a>
            <a href="#">Equipes</a>
            <a href="#">Localizações</a>
            <a href="#">Recrutamento Militar</a>
            <a href="#">Empregos por Hora</a>
          </div>

          <div>
            <h4>Trabalhando na TechWave</h4>
            <a href="#">Cultura</a>
            <a href="#">Benefícios</a>
            <a href="#">Boletim Informativo</a>
            <a href="#">Diversidade na TechWave</a>
            <a href="#">Princípios de Liderança</a>
          </div>

          <div>
            <h4>Ajuda</h4>
            <a href="#">FAQ</a>
            <a href="#">Dicas para Entrevistas</a>
            <a href="#">Status de Aplicação</a>
            <a href="#">Acomodações para Deficiências</a>
            <a href="#">Verificação de Antecedentes</a>
          </div>

          <div className="language-select">
            <button onClick={toggleLanguages}>
              🌐 Português
            </button>
            {showLanguages && (
              <div className="language-dropdown">
                <button>Inglês</button>
                <button>Espanhol</button>
                <button>Português</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="legal-text">
          A TechWave é comprometida com um ambiente de trabalho diversificado e inclusivo. Somos um empregador de oportunidades iguais e não discriminamos com base em raça, origem nacional, identidade de gênero, orientação sexual, status de veterano, idade ou outras proteções legais.
        </p>
        <p>
          <a href="#">Privacidade e Dados</a> | <a href="#">Impressum</a>
        </p>
        <p>© 2024 TechWave, Inc. ou suas afiliadas</p>
      </div>
    </footer>
  );
}
