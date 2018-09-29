FROM node:10
MAINTAINER Greg Taschuk
ENV app truset-beta-onboarding
RUN mkdir -p /usr/src/$app
WORKDIR /usr/src/$app

COPY package.json /usr/src/$app/package.json
COPY yarn.lock /usr/src/$app/yarn.lock
RUN yarn

COPY webpack* ./
COPY .eslintrc .
COPY .babelrc .
COPY index.js .
COPY app /usr/src/$app/app

CMD yarn start
