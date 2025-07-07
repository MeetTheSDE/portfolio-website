#!/bin/bash
echo "Building frontend-only portfolio..."
cd client
npm run build
cd ..
echo "Build complete! Static files are in client/dist/"
echo "To serve the production build:"
echo "cd client && npm run preview"