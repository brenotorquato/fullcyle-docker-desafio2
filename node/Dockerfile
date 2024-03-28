FROM node:slim

WORKDIR /usr/src/app

# RUN npm install express --save

# RUN npm install mysql2 --save

# RUN npm install ejs --save

# RUN npm install sequelize --save

COPY package*.json ./

# RUN npm ci
RUN npm install

RUN chown -R node:node node_modules

COPY . .

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000