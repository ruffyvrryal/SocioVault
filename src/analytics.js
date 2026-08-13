// Vercel Web Analytics Integration
// Import the inject function from the locally installed package
import { inject } from '../node_modules/@vercel/analytics/dist/index.mjs';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto',
  debug: true
});
