FROM node:10.15.3-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm i && npm run build
EXPOSE 3333
CMD ["node", "./build/index.js"]
