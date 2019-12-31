FROM labhackercd/alpine-python3-nodejs
RUN mkdir -p /usr/src/app
RUN chmod +x /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
CMD [ "node", "server.js" ]
