# Base image (Node ringan)
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package.json dulu (biar cache cepat)
COPY package*.json ./

# Install dependency
RUN npm install

# Copy semua file
COPY . .

# Port app kamu
EXPOSE 3000

# Run app
CMD ["node", "server.js"]

USER node