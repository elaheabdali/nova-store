import type { DefaultTheme } from 'styled-components';

export const appThemes: Record<'light' | 'dark', DefaultTheme> = {
<<<<<<< HEAD
  light: {
    mode: 'light',
    colors: {
      background: '#f7f8fb',
      surface: '#ffffff',
      surfaceMuted: '#f0f2f6',
      text: '#16243b',
      muted: '#758195',
      border: '#e6e9ef',
      navy: '#10213c',
      orange: '#f36c32',
      orangeSoft: '#fff0e8',
      footer: '#10213c',
      shadow: '0 16px 45px rgba(16,33,60,.08)',
    },
  },
  dark: {
    mode: 'dark',
    colors: {
      background: '#0d1524',
      surface: '#152238',
      surfaceMuted: '#1d2b42',
      text: '#eff3fa',
      muted: '#a3afc1',
      border: '#2a3952',
      navy: '#edf3ff',
      orange: '#ff844b',
      orangeSoft: '#472d24',
      footer: '#080f1c',
      shadow: '0 16px 45px rgba(0,0,0,.18)',
    },
  },
=======
  light: { mode: 'light', colors: { background: '#f7f8fb', surface: '#ffffff', surfaceMuted: '#f0f2f6', text: '#16243b', muted: '#758195', border: '#e6e9ef', navy: '#10213c', orange: '#f36c32', orangeSoft: '#fff0e8', footer: '#10213c', shadow: '0 16px 45px rgba(16,33,60,.08)' } },
  dark: { mode: 'dark', colors: { background: '#0d1524', surface: '#152238', surfaceMuted: '#1d2b42', text: '#eff3fa', muted: '#a3afc1', border: '#2a3952', navy: '#edf3ff', orange: '#ff844b', orangeSoft: '#472d24', footer: '#080f1c', shadow: '0 16px 45px rgba(0,0,0,.18)' } },
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
};

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
<<<<<<< HEAD
    colors: {
      background: string;
      surface: string;
      surfaceMuted: string;
      text: string;
      muted: string;
      border: string;
      navy: string;
      orange: string;
      orangeSoft: string;
      footer: string;
      shadow: string;
    };
=======
    colors: { background: string; surface: string; surfaceMuted: string; text: string; muted: string; border: string; navy: string; orange: string; orangeSoft: string; footer: string; shadow: string; };
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  }
}
