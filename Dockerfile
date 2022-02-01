FROM node:14
COPY . .
RUN npm install --production
CMD ["node", "server.js"]
