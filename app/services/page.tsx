import DecryptedText from "../DecryptedText"; 

export default function Services() {
  return (
    
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative z-10">
      
      
      <div className="flex flex-col items-center gap-10 text-center bg-black/40 p-10 md:p-16 rounded-3xl backdrop-blur-md border border-white/10 w-full max-w-4xl">
        
        <h1 className="text-sm md:text-base text-gray-400 font-mono tracking-widest uppercase mb-4">
          Minhas Especialidades
        </h1>

        
        <div className="text-2xl md:text-4xl font-mono font-bold text-white cursor-pointer hover:text-cyan-300 transition-colors">
          <DecryptedText text="Clique nos códigos abaixo para descobrir o que eu posso fazer"
            animateOn="view" 
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            speed={30}
            />
        </div>

        
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
