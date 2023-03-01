FROM node:16.14-alpine
WORKDIR /front-end
COPY ./package.json .
RUN npm i
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
