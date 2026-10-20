import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      viteSingleFile(),
      {
        name: 'save-hero-api',
        configureServer(server) {
          server.middlewares.use('/api/save-hero-image', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const parsed = JSON.parse(body);
                  const dataUrl = parsed.dataUrl;
                  const pushToGithub = parsed.pushToGithub !== false;

                  if (!dataUrl || !dataUrl.startsWith('data:')) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Invalid data URL' }));
                    return;
                  }

                  // 1. Write temp file
                  const tmpFile = path.resolve(__dirname, 'scripts/.tmp_hero.json');
                  fs.writeFileSync(tmpFile, JSON.stringify({ dataUrl }), 'utf-8');

                  // 2. Decode and save immediately to public/hero-image.jpg
                  const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                  const buffer = Buffer.from(base64Data, 'base64');
                  fs.writeFileSync(path.resolve(__dirname, 'public/hero-image.jpg'), buffer);

                  // 3. Update src/data/heroImage.ts directly
                  fs.writeFileSync(
                    path.resolve(__dirname, 'src/data/heroImage.ts'),
                    `// Embedded permanent hero image asset for Aluprime\nexport const defaultHeroImage: string | null = ${JSON.stringify(dataUrl)};\n`,
                    'utf-8'
                  );

                  // 4. Run background deploy script if requested
                  if (pushToGithub) {
                    exec(`python3 scripts/save_and_deploy_hero.py scripts/.tmp_hero.json`, (err, stdout, stderr) => {
                      if (err) {
                        console.error('Save & deploy error:', err, stderr);
                      } else {
                        console.log('Save & deploy success:', stdout);
                      }
                      try {
                        fs.unlinkSync(tmpFile);
                      } catch {}
                    });
                  }

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, message: 'Image successfully saved and deploying to GitHub Pages!' }));
                } catch (e) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: String(e) }));
                }
              });
            } else {
              res.writeHead(405, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Method not allowed' }));
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
