import { SiteFooter, SiteHeader } from '../site-shell';

export const metadata = {
  title: 'Trajetória | Augusto Andrade Silva',
};

const milestones = [
  {
    number: '01',
    label: 'Formação técnica',
    title: 'Análise e Desenvolvimento de Sistemas',
    place: 'ETEC',
    detail: 'Formação técnica em ADS.',
    status: 'Concluído',
  },
  {
    number: '02',
    label: 'Ensino superior',
    title: 'Análise e Desenvolvimento de Sistemas',
    place: 'FMU',
    detail: 'Graduação em andamento.',
    status: 'Atualmente',
  },
  {
    number: '03',
    label: 'Experiência profissional',
    title: 'Estágio',
    place: 'Seconci',
    detail: 'Minha primeira experiência profissional na área.',
    status: 'Atualmente',
  },
];

export default function JourneyPage() {
  return (
    <main className="site-container">
      <SiteHeader active="/trajetoria" />
      <section className="inner-page journey-page">
        <div className="page-heading page-heading-row">
          <div>
            <p className="eyebrow">Estudo e prática</p>
            <h1>Estou só<br /><em>começando.</em></h1>
          </div>
          <p className="heading-note">
            Minha trajetória na tecnologia está no início e continua sendo construída entre a sala
            de aula, o estágio e os projetos que faço por conta própria.
          </p>
        </div>
        <div className="milestone-list">
          {milestones.map((milestone) => (
            <article className="milestone" key={milestone.number}>
              <span className="project-number">{milestone.number}</span>
              <div className="milestone-copy">
                <p className="project-kind">{milestone.label}</p>
                <h2>{milestone.title}</h2>
                <p className="milestone-place">{milestone.place}</p>
                <p className="project-description">{milestone.detail}</p>
              </div>
              <span className="milestone-status">{milestone.status}</span>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
