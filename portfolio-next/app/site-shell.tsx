import Link from 'next/link';
import { profileLinks } from './site';

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/trajetoria', label: 'Trajetória' },
  { href: '/contato', label: 'Contato' },
];

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Augusto Andrade Silva — início">
        augusto<span>.dev</span>
      </Link>
      <nav className="main-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link
            aria-current={active === item.href ? 'page' : undefined}
            className={active === item.href ? 'nav-current' : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-github" href={profileLinks.github} target="_blank" rel="noreferrer">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-name" href="/">Augusto Andrade Silva</Link>
      <span>Feito com cuidado em São Paulo.</span>
      <div className="footer-links">
        <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={profileLinks.email}>E-mail ↗</a>
      </div>
    </footer>
  );
}
