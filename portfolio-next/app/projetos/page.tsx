import { projects, profileLinks } from '../site';
import { SiteFooter, SiteHeader } from '../site-shell';

export const metadata = {
  title: 'Projetos | Augusto Andrade Silva',
};

export default function ProjectsPage() {
  return (
    <main className="site-container">
      <SiteHeader active="/projetos" />
      <section className="inner-page projects-page">
        <div className="page-heading page-heading-row">
          <div>
            <p className="eyebrow">Feitos para aprender</p>
            <h1>Projetos que<br /><em>saíram do papel.</em></h1>
          </div>
          <p className="heading-note">
            Trabalhos de estudo e projetos em equipe. Cada um me ensinou algo novo sobre código e
            sobre como transformar uma ideia em algo que funciona.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-kind">{project.category}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="technology-list">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <a
                className="round-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${project.title} no GitHub`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
        <a className="button button-outline" href={profileLinks.github} target="_blank" rel="noreferrer">
          Ver meu GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
