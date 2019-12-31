FROM labhackercd/alpine-python3-nodejs
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh
RUN npm ci
EXPOSE 80
CMD [ "node", "server.js" ]
