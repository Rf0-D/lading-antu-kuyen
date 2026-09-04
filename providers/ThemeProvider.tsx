"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type PhaseMode = "day" | "night";

interface AntuThemeContextValue {
  phaseMode: PhaseMode;
  setPhaseMode: (mode: PhaseMode) => void;
}

const AntuThemeContext =
  createContext<AntuThemeContextValue | null>(null);

export function AntuThemeProvider({ children }: { children: ReactNode; }) {
  const [phaseMode, setPhaseMode] = useState<PhaseMode>("night");

  return (
    <AntuThemeContext.Provider
      value={{ phaseMode, setPhaseMode }}
    >
      {children}
    </AntuThemeContext.Provider>
  );
}

export function useAntuTheme() {
  const context = useContext(AntuThemeContext);

  if (!context) {
    throw new Error(
      "useAntuTheme debe usarse dentro de AntuThemeProvider",
    );
  }

  return context;
}