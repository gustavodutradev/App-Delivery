FROM  node:16.14-alpine

WORKDIR /front-end

EXPOSE 3000

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["start"]