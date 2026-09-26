// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react()],
  // Netlify corre el server con sus propias funciones: el adapter de node en
  // modo standalone no sirve aca.
  adapter: netlify(),
  env: {
    // access: "secret" mantiene el valor FUERA del bundle: se lee de
    // process.env en runtime, asi la clave se puede rotar sin recompilar.
    // Con import.meta.env Astro la reemplaza por texto plano al compilar.
    //
    // optional: true + validateSecrets: false para que un build sin secrets
    // (PRs, deploys de prueba) no reviente: la falta de clave se reporta en
    // runtime cuando se pide un análisis.
    validateSecrets: false,
    schema: {
      OPENROUTER_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: '',
      }),
      OPENROUTER_MODEL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: '',
      }),
      OPENROUTER_MODEL_FALLBACK: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: '',
      }),
      GOOGLE_SCRIPT_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: '',
      }),
    },
  },
});
