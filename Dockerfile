# First stage: build the app using a base image containing node.js
FROM node:10 as build-stage
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build
LABEL maintainer="George Gabriel Luta"
RUN mkdir /app
COPY --from=build-stage /app/dist /app
EXPOSE 80
