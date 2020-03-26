FROM node:13.11.0-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./ ./

CMD ["yarn", "start"]
