
/**
 * School Portfolio Color Palette
 * 
 * This file contains all color definitions used throughout the application.
 * Modify these values to change the color scheme across the entire site.
 */

export const colors = {
  // Primary colors
  navy: {
    DEFAULT: '#1e3a8a', // school-navy
    light: '#2e4a9a',
    dark: '#0e2a7a',
  },
  gold: {
    DEFAULT: '#f9ca24', // school-gold
    light: '#fad44a',
    dark: '#e8b914',
  },
  
  // Neutrals
  white: '#ffffff',
  black: '#000000',
  
  // Gray scale
  gray: {
    50: '#F5F7FA',  // school-light
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Accent colors
  blue: {
    DEFAULT: '#0a3d62', // school-blue
    light: '#1a4d72',
    dark: '#002d52',
  },
  
  // Utility colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

export const gradients = {
  primary: `linear-gradient(to right, ${colors.navy.DEFAULT}, ${colors.blue.DEFAULT})`,
  secondary: `linear-gradient(to right, ${colors.gold.DEFAULT}, ${colors.gold.light})`,
  hero: `linear-gradient(to right, ${colors.navy.DEFAULT}90, ${colors.navy.DEFAULT}80)`,
  card: `linear-gradient(to bottom right, ${colors.white}, ${colors.gray[100]})`,
};

export default colors;
