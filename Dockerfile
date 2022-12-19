FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/gdsc-admin-dashboard
