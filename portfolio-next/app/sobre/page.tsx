import Image from 'next/image';
import { SiteFooter, SiteHeader } from '../site-shell';

export const metadata = {
  title: 'Sobre | Augusto Andrade Silva',
};

export default function AboutPage() {
  return (
    <main className="site-container">
      <SiteHeader active="/sobre" />
      <section className="inner-page about-page">
        <div className="page-heading">
          <p className="eyebrow">Prazer, Augusto</p>
          <h1>Um pouco<br />da minha <em>história.</em></h1>
        </div>
        <div className="about-layout">
          <figure className="about-photo">
            <Image src="/augusto.jpeg" alt="Foto de Augusto" width={768} height={1365} priority />
            <figcaption>São Paulo, SP · 19 de outubro de 2007</figcaption>
          </figure>
          <div className="about-story">
            <p className="story-lead">
              Tenho 18 anos e estou dando meus primeiros passos na área de tecnologia.
            </p>
            <p>
              Sou de São Paulo. Fiz o curso técnico de Análise e Desenvolvimento de Sistemas na
              ETEC e hoje curso ADS na FMU. Gosto de aprender fazendo: testar uma ideia, encontrar
              um jeito de resolver um problema e ir melhorando no caminho.
            </p>
            <p>
              Atualmente faço estágio na Seconci. Fora da rotina de estudos e trabalho, uso meus
              projetos para praticar programação e conhecer novas ferramentas.
            </p>
            <div className="about-details">
              <div><span>Formação técnica</span><strong>ETEC · ADS</strong></div>
              <div><span>Graduação</span><strong>FMU · ADS em andamento</strong></div>
              <div><span>Experiência</span><strong>Estagiário na Seconci</strong></div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
