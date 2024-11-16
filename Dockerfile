FROM node:18-alpine as base
WORKDIR /app
RUN npm i -g pnpm@9.7.0
RUN pnpm install 
COPY . .
EXPOSE 3001
CMD ["pnpm", "run", "start:dev"]