# Estágio de build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run docs:build

# Estágio de produção (só o necessário)
FROM node:18-alpine

WORKDIR /app

# Instalar apenas o serve
RUN npm install -g serve

# Copiar APENAS o build (não copia node_modules nem código fonte)
COPY --from=builder /app/.vitepress/dist ./dist

EXPOSE 55004

CMD ["serve", "-s", "dist", "-l", "55004"]