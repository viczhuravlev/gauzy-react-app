FROM node:12-alpine
RUN apk add --no-cache g++ make python
WORKDIR /usr/src/app
ENV NODE_ENV=development
CMD [ -d "node_modules" ] && npm run start || npm ci && npm run start
