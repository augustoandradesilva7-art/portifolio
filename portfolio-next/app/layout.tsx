import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Augusto Andrade Silva | Portfólio',
  description:
    'Portfólio de Augusto Andrade Silva, estudante de ADS na FMU, técnico pela ETEC e estagiário na Seconci.',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
