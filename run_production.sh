#!/bin/bash
pm2 stop all
cd ~/workspace/qm3staffing/
git pull origin master
npm run build
cd server
pm2 start server.js --time
cd -

