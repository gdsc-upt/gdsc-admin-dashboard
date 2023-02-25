FROM node:lts-alpine as build

WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock /app/

RUN yarn install --production

COPY . /app

RUN ls -al /app

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/gdsc-admin-dashboard
