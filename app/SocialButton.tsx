"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialButtonProps {
  icon: IconDefinition;
  label: string;
  url: string;
  color: string; // Ex: #25D366
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, url, color }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 rounded-xl font-mono font-bold text-white transition-all duration-300 border border-white/10 hover:scale-105 active:scale-95"
      style={{ 
        backgroundColor: `${color}20`, // Fundo com 20% de opacidade da cor original
        borderColor: `${color}40` 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.boxShadow = `0 0 20px ${color}60`;
        e.currentTarget.style.color = color === '#181717' ? '#fff' : '#000'; // Ajuste de contraste para o GitHub
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${color}20`;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.color = '#fff';
      }}
    >
      <FontAwesomeIcon icon={icon} className="text-xl" />
      <span>{label}</span>
    </a>
  );
};

export default SocialButton;