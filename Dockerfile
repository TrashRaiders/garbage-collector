FROM node:14

ENV PORT 3001

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

# Copy source files into container
COPY . /usr/src/app

# Build the app
EXPOSE 3001

# Run the app
CMD "yarn" "dev"
