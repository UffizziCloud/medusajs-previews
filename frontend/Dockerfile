FROM node:lts-alpine3.17
WORKDIR /app
RUN apt-get update
RUN npm install -g npm
RUN npm install
COPY . .

EXPOSE 8000
CMD ["yarn", "start"]