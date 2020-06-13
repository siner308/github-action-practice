FROM node:12.14

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json

WORKDIR src
RUN npm i

COPY ./app.js /src/app.js
COPY ./server.js /src/server.js
COPY ./router /src/router
COPY ./views /src/views
COPY ./data /src/data


ENTRYPOINT ["npm", "start"]
