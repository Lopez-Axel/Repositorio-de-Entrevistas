/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENROUTER_API_KEY: string;
  readonly OPENROUTER_MODEL: string;
  readonly OPENROUTER_MODEL_FALLBACK: string;
  readonly GOOGLE_SHEET_ID: string;
  readonly GOOGLE_SCRIPT_URL: string;
}