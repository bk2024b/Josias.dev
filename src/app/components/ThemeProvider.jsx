'use client';

import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default function ThemeProvider({ children }) {
  // Force dark theme only
  useEffect(() => {
    // Appliquer le mode sombre au chargement
    document.documentElement.classList.add('dark');
  }, []);

  // Fonction vide pour éviter les erreurs lors des appels existants
  const toggleTheme = () => {
    // Ne rien faire, car nous n'avons plus besoin de changer de thème
  };

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}