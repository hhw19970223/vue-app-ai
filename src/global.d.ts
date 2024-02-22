declare global {

  interface Window {
    pwaPrompt: () => void;
  }

  // 环境配置
  interface ImportMeta {
    env: ImportMetaEnv
  }

  interface ImportMetaEnv {
    VITE_HOST: string;
    VITE_HOST_WS: string;
    VITE_SECRET: string;
  }
}    

export {};