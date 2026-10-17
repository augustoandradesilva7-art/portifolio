import Image from 'next/image';
import Link from 'next/link';
import { projects, profileLinks } from './site';
import { SiteFooter, SiteHeader } from './site-shell';

export default function Home() {
  return (
    <main className="site-container">
      <SiteHeader active="/" />
      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow"><span>//</span> Desenvolvedor em formação · São Paulo, SP</p>
          <h1>Oi, eu sou<br /><em>Augusto.</em></h1>
          <p className="home-intro">
            Tenho 18 anos, estudo Análise e Desenvolvimento de Sistemas na FMU e trabalho como
            estagiário na Seconci. Este é um pouco do que venho aprendendo e criando.
          </p>
          <div className="home-actions">
            <Link className="button button-dark" href="/projetos">Conheça meus projetos <span aria-hidden="true">↗</span></Link>
            <Link className="quiet-link" href="/sobre">Um pouco sobre mim <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-note">
            <span className="note-rule" />
            <span>um commit de cada vez.</span>
          </div>
        </div>
        <figure className="home-portrait">
          <Image
            src="/augusto.jpeg"
            alt="Augusto em uma foto de espelho"
            width={768}
            height={1365}
            priority
          />
          <span className="image-file-label">~/augusto/profile.jpg</span>
          <figcaption>
            <span>Augusto Andrade Silva</span>
            <span>Estudante · Estagiário · Curioso</span>
          </figcaption>
        </figure>
        <div className="hero-index" aria-hidden="true">01 / 04</div>
      </section>

      <section className="home-projects">
        <div className="section-topline">
          <p className="eyebrow">Alguns trabalhos</p>
          <Link className="quiet-link" href="/projetos">Todos os projetos <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="home-project-grid">
          {projects.map((project) => (
            <a className="home-project" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span className="project-kind">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="project-visit">Ver no GitHub <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
