// Frontend-only portfolio - starting Vite dev server
import { spawn } from 'child_process';
import path from 'path';

console.log('Starting frontend-only portfolio...');

const clientDir = path.join(process.cwd(), 'client');
const viteProcess = spawn('npx', ['vite', '--port', '5000', '--host', '0.0.0.0'], {
  cwd: clientDir,
  stdio: 'inherit'
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');
  viteProcess.kill('SIGTERM');
});