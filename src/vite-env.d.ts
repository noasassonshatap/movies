/// <reference types="vite/client" />

// Add the names of the env variables here to get type checking and intellisense in your code.
interface ImportMetaEnv {
  readonly VITE_API_TOKEN: string;
  readonly VITE_BACKEND_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
