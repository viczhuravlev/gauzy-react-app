FROM node:13.8-alpine

WORKDIR /usr/src/app

CMD [ -d "node_modules" ] && yarn start || yarn install --frozen-lockfile && yarn start
