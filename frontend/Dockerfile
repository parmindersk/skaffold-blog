FROM node:22
WORKDIR /app
COPY server.js index.html ./
RUN npm install express node-fetch
CMD ["node", "server.js"]

