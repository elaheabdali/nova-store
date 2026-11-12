'use client';

<<<<<<< HEAD
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
=======
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { appThemes } from './themes';

type ThemeMode = 'light' | 'dark';
<<<<<<< HEAD
interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}
=======
interface ThemeContextValue { mode: ThemeMode; toggleTheme: () => void; }
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  useEffect(() => {
    const stored = window.localStorage.getItem('nova-store-theme');
    if (stored === 'dark' || stored === 'light') setMode(stored);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    window.localStorage.setItem('nova-store-theme', mode);
  }, [mode]);
<<<<<<< HEAD
  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () =>
        setMode((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  );
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={appThemes[mode]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
=======
  const value = useMemo(() => ({ mode, toggleTheme: () => setMode((current) => current === 'light' ? 'dark' : 'light') }), [mode]);
  return <ThemeContext.Provider value={value}><StyledThemeProvider theme={appThemes[mode]}>{children}</StyledThemeProvider></ThemeContext.Provider>;
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
}

export function useThemeMode() {
  const context = useContext(ThemeContext);
<<<<<<< HEAD
  if (!context)
    throw new Error('useThemeMode must be used inside ThemeContextProvider');
=======
  if (!context) throw new Error('useThemeMode must be used inside ThemeContextProvider');
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  return context;
}
