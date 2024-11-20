# **Techwave Project**

**Site de Vagas - Formulário de Inscrição e Upload de Currículo**

Este projeto é uma aplicação web para gerenciar vagas de emprego. Ele permite que usuários enviem dados e currículos através de um formulário integrado ao Firebase. A aplicação foi construída com React e utiliza Firebase Firestore para o backend e Firebase Hosting para o deploy.

**Funcionalidades**

-   Formulário de Inscrição: Permite enviar dados pessoais, interesses profissionais e upload de currículos.
-   Armazenamento no Firestore: Registra os dados do formulário em uma base segura e escalável.
-   Deploy Automático: Integração com GitHub Actions para deploy automático no Firebase Hosting após cada pull request aprovado.
-   Frontend com React: Utiliza componentes React reutilizáveis para modularidade e manutenção.

**Estrutura do Código**

**Arquivos Essenciais**

-   App.tsx: Estrutura o layout principal e gerencia o roteamento da aplicação.
-   firebaseConfig.ts: Configuração e inicialização do Firebase (Firestore e Hosting).
-   index.html: Estrutura base do projeto carregada pelo Vite para otimização e build rápido.

**Componentes (src/components)**

-   Header.tsx: Configura o cabeçalho e navegação do site.
-   Footer.tsx: Exibe informações no rodapé da aplicação.
-   InscricaoForm.tsx: Componente principal para o formulário de inscrição de vagas.
-   JobList.tsx: Renderiza uma lista de vagas disponíveis para os usuários.
-   ExploreOpportunities.tsx: Exibe as oportunidades disponíveis.
-   MissionSection.tsx: Destaca a missão e os valores da empresa no site.

**Tecnologias Utilizadas**

-   React.js: Framework para construção de interfaces de usuário dinâmicas e responsivas.
-   TypeScript: Para maior segurança e tipagem no desenvolvimento.
-   CSS: Usado para estilização e responsividade da interface.
-   Vite: Otimização para o desenvolvimento e build da aplicação.
-   Firebase:
-       Firestore: Backend escalável para armazenamento de dados.
        Hosting: Deploy automático para hospedagem confiável.
-   GitHub Actions: Configurado para integração e deploy contínuos (CI/CD).

**Boas Práticas**

-   Código Limpo: Organização dos componentes com responsabilidades bem definidas.
-   Hooks do React: Uso de useState e useEffect para gerenciamento de estado e efeitos.
-   Componentização: Separação lógica de funcionalidades em componentes reutilizáveis.
-   Deploy Automatizado: Configuração do GitHub Actions para deploy no Firebase Hosting.

**Licença**

*Este projeto é licenciado sob a licença MIT.*



>>>>>>> 4bb1bf1d86e9384406cdce8a671268698d471cf9
