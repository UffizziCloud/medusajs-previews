FROM node:lts-alpine3.17
WORKDIR /app
COPY . .
RUN npm install -g npm
RUN npm install 

EXPOSE 8000
CMD ["yarn", "start"]