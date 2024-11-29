# Previsao App - Angular + Nginx + Docker

Este projeto contém uma aplicação **Angular** configurada para ser servida com **Nginx** dentro de um contêiner **Docker**. A aplicação faz previsões com base em parâmetros fornecidos pelo usuário e se comunica com um endpoint backend através de requisições HTTP.

## Tecnologias Utilizadas

- **Angular**: Framework para construção da aplicação frontend.
- **Nginx**: Servidor web para servir a aplicação Angular.
- **Docker**: Plataforma para criar, rodar e empacotar a aplicação em contêineres.
- **HttpClient (Angular)**: Para realizar requisições HTTP (POST) para o backend.

## Funcionalidades

- Formulário interativo onde o usuário pode inserir:
  - **Ticker** (símbolo de ações ou outros ativos financeiros)
  - **Período** (período de tempo da previsão)
  - **Intervalo** (intervalo de tempo das previsões)
  
- Envia esses dados para um backend (via HTTP POST) e exibe a resposta na aplicação.

## Pré-Requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- **Docker**: Para criar e rodar contêineres.
- **Node.js e NPM**: Para instalar dependências do Angular e rodar o projeto localmente.
- **Angular CLI**: Para desenvolver e gerar builds do Angular.

## Instalação e Configuração

### Passo 1: Clone o repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/previsao-app.git
cd previsao-app
```
### Passo 2: Instalar Dependências do Angular

Dentro do diretório do projeto, instale as dependências com o NPM:

```bash
npm install
```
### Passo 3: Construir a Aplicação Angular

Para gerar os arquivos de produção da aplicação Angular, execute o comando:

```bash
ng build --prod
```

### Passo 3.1: Star aplicação Angular

Iniciar aplicação Angular:

```bash
ng serve
```

### Passo 4: Criar a Imagem Docker

O projeto vem com um Dockerfile configurado para construir a aplicação Angular e servir os arquivos com o Nginx. Para construir a imagem Docker, execute:

```bash
sudo docker build -t angular-previsao-app .
```
### Passo 5: Rodar a Aplicação no Docker

Depois de construir a imagem, execute o seguinte comando para rodar o contêiner:

```bash
sudo docker run -p 8081:80 angular-previsao-app
```
### Passo 6: Acessar a Aplicação

Abra o navegador e acesse a aplicação em:

```bash
http://localhost:8081
```