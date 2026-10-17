import Image from 'next/image';

const projects = [
  {
    number: '01',
    title: 'IsyShell',
    category: 'Automação · Python',
    description:
      'API em FastAPI para acionar rotinas de manutenção simuladas e consultar registros de execução armazenados em SQLite.',
    technologies: ['Python', 'FastAPI', 'SQLite'],
    href: 'https://github.com/augustoandradesilva7-art/IsyShell',
  },
  {
    number: '02',
    title: 'DS Memoriza',
    category: 'Jogo web · Projeto em equipe',
    description:
      'Jogo da memória feito com HTML, CSS e JavaScript, com cartas dinâmicas, cronômetro e contador de movimentos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/augustoandradesilva7-art/Ds-memoria',
  },
  {
    number: '03',
    title: 'Wallis Bank',
    category: 'Aplicação de terminal · Python',
    description:
      'Projeto acadêmico em equipe que simula um caixa eletrônico e reúne operações bancárias em uma aplicação Python.',
    technologies: ['Python'],
    href: 'https://github.com/augustoandradesilva7-art/Wallis-Bank',
  },
];

const links = {
  github: 'https://github.com/augustoandradesilva7-art',
  linkedin: 'https://www.linkedin.com/in/augusto-andrade-ti/',
  email: 'mailto:augustoandradesilva7@gmail.com',
};

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Augusto, início">
          A<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="topbar-link" href={links.github} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Disponível para aprender e criar</p>
          <h1>
            Oi, eu sou
            <br />
            <span>Augusto.</span>
          </h1>
          <p className="hero-description">
            Estudante de Análise e Desenvolvimento de Sistemas, técnico em ADS e estagiário na
            Seconci. Gosto de transformar ideias em projetos e aprender construindo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Conheça meus projetos <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href={links.email}>Vamos conversar <span aria-hidden="true">↗</span></a>
          </div>

          <div className="facts" aria-label="Informações pessoais">
            <div>
              <span className="fact-label">Moro em</span>
              <span className="fact-value">São Paulo, SP</span>
            </div>
            <div>
              <span className="fact-label">Idade</span>
              <span className="fact-value">18 anos</span>
            </div>
            <div>
              <span className="fact-label">Aniversário</span>
              <span className="fact-value">19 out 2007</span>
            </div>
          </div>
        </div>

        <figure className="portrait-card">
          <Image
            className="portrait-image"
            src="/augusto.jpeg"
            alt="Foto de Augusto"
            width={768}
            height={1365}
            priority
          />
          <figcaption className="portrait-caption">
            <span className="caption-mark">A.</span>
            <span>
              <strong>Augusto Andrade Silva</strong>
              <small>Estudante e desenvolvedor em formação</small>
            </span>
            <span className="caption-arrow" aria-hidden="true">↗</span>
          </figcaption>
        </figure>
        <a className="scroll-cue" href="#sobre"><span aria-hidden="true">↓</span> Role para conhecer</a>
      </section>

      <section className="about section-block" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">Um pouco sobre mim</p>
          <h2>Tecnologia, curiosidade<br />e vontade de <span>evoluir.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            Sou de São Paulo e estou construindo minha trajetória na tecnologia. Tenho formação
            técnica em Análise e Desenvolvimento de Sistemas pela ETEC e atualmente curso ADS na FMU.
          </p>
          <p>
            No estágio na Seconci e nos projetos que desenvolvo, sigo aprendendo na prática e
            explorando programação, aplicações web e automação.
          </p>
          <div className="skills-list" aria-label="Tecnologias dos meus projetos">
            {['HTML', 'CSS', 'JavaScript', 'Python', 'FastAPI', 'SQLite'].map((skill) => (
              <span className="skill-tag" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section-block" id="projetos">
        <div className="section-title-row">
          <div className="section-heading">
            <p className="eyebrow">Feitos com código</p>
            <h2>Projetos <span>selecionados.</span></h2>
          </div>
          <a className="text-link all-projects" href={links.github} target="_blank" rel="noreferrer">
            Ver GitHub completo <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech" aria-label={`Tecnologias: ${project.technologies.join(', ')}`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver código do projeto ${project.title} no GitHub`}
              >
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="journey section-block" id="trajetoria">
        <div className="section-heading">
          <p className="eyebrow">Aprendizado contínuo</p>
          <h2>Minha <span>trajetória.</span></h2>
        </div>
        <div className="journey-list">
          <article className="journey-item">
            <span className="journey-index">01</span>
            <div>
              <h3>Estágio</h3>
              <p>Seconci · Experiência profissional</p>
            </div>
            <span className="journey-status">Atualmente</span>
          </article>
          <article className="journey-item">
            <span className="journey-index">02</span>
            <div>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>FMU · Ensino superior</p>
            </div>
            <span className="journey-status">Em andamento</span>
          </article>
          <article className="journey-item">
            <span className="journey-index">03</span>
            <div>
              <h3>Técnico em Análise e Desenvolvimento de Sistemas</h3>
              <p>ETEC · Formação técnica</p>
            </div>
            <span className="journey-status">Concluído</span>
          </article>
        </div>
      </section>

      <footer className="contact section-block" id="contato">
        <p className="eyebrow">Vamos nos conectar?</p>
        <h2>Uma boa ideia começa<br />com uma <span>conversa.</span></h2>
        <a className="button button-primary" href={links.email}>
          Fale comigo <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Augusto Andrade Silva</span>
          <div>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={links.email}>E-mail ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
