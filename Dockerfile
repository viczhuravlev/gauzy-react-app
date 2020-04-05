FROM node:13.8-alpine

RUN apk add g++ make python git

WORKDIR /usr/src/app

CMD [ -d "node_modules" ] && npm run start || npm ci && npm run start
