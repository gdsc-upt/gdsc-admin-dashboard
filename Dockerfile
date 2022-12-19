FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock /app/

RUN yarn install --production

COPY . /app

RUN ls -al /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/gdsc-admin-dashboard
