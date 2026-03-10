import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/remotion/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        qlm: {
          ink: '#0f172a',
          muted: '#64748b'
        }
      }
    }
  },
  plugins: []
};

export default config;
