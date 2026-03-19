"use client"
import SocialButton from "../SocialButton";
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
    <>
    
         <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative z-10">
              
              {/* 2. Container Glassmorphism: centraliza os textos e cria um fundo translúcido */}
              <div className="flex flex-col items-center gap-10 text-center bg-black/40 p-10 md:p-16 rounded-3xl backdrop-blur-md border border-white/10 w-full max-w-4xl">
                
                <h1 className="text-sm md:text-base text-gray-400 font-mono tracking-widest uppercase mb-4">
                  Entre em Contato
                </h1>

                <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        
                    <SocialButton 
                    icon={faWhatsapp} 
                    label="WhatsApp" 
                    url="https://wa.me/5579996370107" 
                    color="#25D366" 
                    />

                </div>
                
        
              </div>
            </main>
    
    </>
  );
}