import DecryptedText from "../DecryptedText"; // Ajuste o caminho de importação conforme necessário

export default function Services() {
  return (
    // 1. min-h-screen, flex, items-center e justify-center garantem a centralização absoluta
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative z-10">
      
      {/* 2. Container Glassmorphism: centraliza os textos e cria um fundo translúcido */}
      <div className="flex flex-col items-center gap-10 text-center bg-black/40 p-10 md:p-16 rounded-3xl backdrop-blur-md border border-white/10 w-full max-w-4xl">
        
        <h1 className="text-sm md:text-base text-gray-400 font-mono tracking-widest uppercase mb-4">
          Minhas Especialidades
        </h1>

        {/* Example 1: Defaults (hover to decrypt) */}
        <div className="text-2xl md:text-4xl font-mono font-bold text-white cursor-pointer hover:text-cyan-300 transition-colors">
          <DecryptedText text="Clique nos textos abaixo para descobrir o que eu posso fazer"
            animateOn="view" // Corrigido de "click" para "view" conforme o seu comentário original
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            speed={30}
            />
        </div>

        {/* Example 2: Customized speed and characters */}
        <div className="text-xl md:text-3xl font-mono text-cyan-400">
          <DecryptedText
            text="Automatização de processos e criação de Saas com n8n"
            speed={30}
            sequential
            useOriginalCharsOnly={false}
            className="revealed"
            animateOn="click"
            clickMode="toggle"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        {/* Example 3: Click to decrypt (toggle mode) */}
        <div className="text-xl md:text-3xl font-mono font-semibold text-purple-400 cursor-pointer">
          <DecryptedText
            text="Criação de sites e landing pages com React.js"
            speed={30}
            sequential
            useOriginalCharsOnly={false}
            className="revealed"
            animateOn="click"
            clickMode="toggle"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        {/* Example 4: Animate on view (runs once) */}
        <div className="text-xl md:text-3xl font-mono text-gray-300 mt-4">
          <DecryptedText
            text="Deploy e orquestração de containers com Docker"
            speed={30}
            sequential
            useOriginalCharsOnly={false}
            className="revealed"
            animateOn="click"
            clickMode="toggle"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        <div className="text-xl md:text-3xl font-mono text-gray-300 mt-4">
          <DecryptedText
            text="Integração Back-End e APIs"
            speed={30}
            sequential
            useOriginalCharsOnly={false}
            className="revealed"
            animateOn="click"
            clickMode="toggle"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

      </div>
    </main>
  );
}