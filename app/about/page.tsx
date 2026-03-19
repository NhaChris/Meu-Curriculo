"use client"

export default function About() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white pt-32 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-mono text-cyan-300 mb-8">
          Sobre mim.
        </h1>
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Sou um desenvolvedor apaixonado por resolver problemas complexos através de código limpo e arquiteturas eficientes. Meu foco é construir sistemas que não apenas funcionem perfeitamente, mas que sejam escaláveis e fáceis de manter.
          </p>
          <p>
            Trabalho com estruturação de dados e APIs, criação de sites e landing pages e também faço automações de processos 
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Stack & Ferramentas</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Microsoft SQL', 'Docker', 'n8n'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-800 rounded-full text-sm font-mono text-cyan-100 border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Idiomas</h2>
          <div className="flex flex-wrap gap-3">
            {['Português', 'Inglês'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-800 rounded-full text-sm font-mono text-cyan-100 border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>      
      </div>
    </main>
  );
}