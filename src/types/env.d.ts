declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MODE: 'development' | 'production' | 'test';
      NEXT_BASE_API_URL?: string;
    }
  }
}

export {};
