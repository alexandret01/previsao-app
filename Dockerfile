# Etapa 1: Build da aplicação Angular
FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build --prod

# Etapa 2: Servir a aplicação
FROM nginx:alpine

COPY --from=build /app/dist/previsao-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
