# Etapa 1: Build da aplicação Angular
FROM node:18 AS build

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o package.json e o package-lock.json (se existir) para instalar dependências
COPY package*.json ./
RUN npm install

# Copiando o restante dos arquivos do projeto
COPY . .

# Rodando o build de produção
RUN npm run build --prod

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copiando o arquivo de configuração do Nginx customizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiando os arquivos de build da aplicação Angular para o diretório do Nginx
COPY --from=build /app/dist/previsao-app /usr/share/nginx/html

# Expondo a porta 80 para acessar a aplicação
EXPOSE 80
