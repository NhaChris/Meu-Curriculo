"use client"
import RotatingText from "./RotatingText";

export default function Home() {
  
  return (
    <>
      <div style={{ height: '100vh', background: 'black/40'}}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
  
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-3xl md:text-5xl font-mono font-bold text-white tracking-tight">
    
          
          <span>Criando soluções em</span>
    
          
          <RotatingText
          texts={['Front-End', 'Back-End', 'Automações']}
          mainClassName="px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-1 md:py-2 flex justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        </div>

      
        <p className="text-center text-gray-400 mt-6 font-mono text-sm md:text-base font-light tracking-wider">
        Clique no menu para mais informações do meu currículo
        </p>

      </div>
    </div>

    </>
  );
}
