FROM node:14-alpine as build


LABEL description="This the base Docker image for GDSC UPT Admin Dasboard React app"


ARG BRANCH=main

RUN mkdir /gdsc-admin-dashboard

WORKDIR /gdsc-admin-dashboard

ENV PATH /gdsc-admin-dashboard/node_modules/.bin:$PATH


# install app dependencies

COPY ["package.json", "yarn.lock", "./"]

RUN yarn


# add app

COPY . ./

#RUN yarn run build:$BRANCH --main

EXPOSE 3000

# start app

CMD ["yarn", "start"]
