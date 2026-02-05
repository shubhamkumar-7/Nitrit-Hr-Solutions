import { build } from 'vite'; 
import { fileURLToPath } from 'url'; 
 
async function buildClient() { 
  await build({ 
    configFile: './vite.config.ts', 
  }); 
} 
 
