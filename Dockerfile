FROM node:8.9.3-slim

ENV WORKDIR="/data/blog"

WORKDIR $WORKDIR

RUN echo "NodeJS $(node -v)" && echo "NPM $(npm -v)"

RUN apt-get update \
    && apt-get install -y build-essential libssl-dev python \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY ./ $WORKDIR/

RUN npm install -g gulp \
    && npm install \
    && cd semantic && gulp build \
    && cd ../ && npm run build \
    && npm cache clean --force \
    && rm -rf /usr/local/lib/node_modules

# Set after build
ENV NODE_ENV="production"

CMD ["node", "initializers/server/index.js"]

EXPOSE 3333
