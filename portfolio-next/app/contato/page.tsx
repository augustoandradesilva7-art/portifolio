import { profileLinks } from '../site';
import { SiteFooter, SiteHeader } from '../site-shell';

export const metadata = {
  title: 'Contato | Augusto Andrade Silva',
};

export default function ContactPage() {
  return (
    <main className="site-container">
      <SiteHeader active="/contato" />
      <section className="inner-page contact-page">
        <p className="eyebrow">Vamos conversar?</p>
        <h1>Uma mensagem<br />pode ser o começo<br />de algo <em>legal.</em></h1>
        <p className="contact-intro">
          Quer falar sobre um projeto, trocar uma ideia ou entrar em contato? Pode me encontrar por aqui:
        </p>
        <div className="contact-options">
          <a href={profileLinks.email}>
            <span className="contact-label">E-mail</span>
            <span className="contact-value">augustoandradesilva7@gmail.com</span>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Augusto Andrade</span>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">augustoandradesilva7-art</span>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
