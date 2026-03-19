import type { Metadata } from "next";
import "./globals.css"; 
import StaggeredMenu from "./Menu";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Orb from './Orb';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de Desenvolvedor e Automações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    { label: 'Início', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Sobre', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Serviços', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contato', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/christyanmarcos' },
  ];

  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className="bg-transparent text-white antialiased relative min-h-screen backdrop-blur-sm">
        
        {/* 1. BACKGROUND ANIMADO (Fica no fundo de tudo) */}
        <div className="fixed inset-0 bg-[#1e1f20] -z-10 pointer-events-none">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Orb
              hoverIntensity={2}
              rotateOnHover
              hue={0}
              forceHoverState={false}
              backgroundColor="#000000"
          />
          </div>
        </div>

        {/* 2. MENU FIXO (Fica por cima das páginas) */}
        <StaggeredMenu
          position="left"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/chris02.svg"
          accentColor="#5227FF"
          isFixed={true}
        />

        {/* 3. CONTEÚDO DAS PÁGINAS (Home, About, Services...) */}
        {/* O relative z-10 garante que o texto fique sempre acima do Aurora */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}