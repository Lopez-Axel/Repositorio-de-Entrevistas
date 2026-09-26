// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  adapter: node({ mode: 'standalone' }),
  env: {
    // access: "secret" mantiene el valor FUERA del bundle: se lee de
    // process.env en runtime, asi la clave se puede rotar sin recompilar.
    // Con import.meta.env Astro la reemplaza por texto plano al compilar.
    schema: {
      OPENROUTER_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
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
