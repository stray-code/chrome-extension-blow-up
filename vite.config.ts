import { defineConfig } from 'vite';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'サイト炎上',
  description: 'サイトを炎上させます。',
  version: '1.0.3',
  icons: {
    '16': 'img/icon16.png',
    '48': 'img/icon48.png',
    '128': 'img/icon128.png',
  },
  action: {
    default_icon: 'img/icon16.png',
  },
  content_scripts: [
    {
      js: ['src/content/main.ts'],
      matches: ['http://*/*', 'https://*/*'],
    },
  ],
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  permissions: ['contextMenus'],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
