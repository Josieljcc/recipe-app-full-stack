# Usar a imagem node:16.14-alpine como base
FROM node:18.12.1-alpine
# Mudar para o diretório de trabalho /app-frontend
WORKDIR /app-frontend
# Copiar os package.json e package-lock.json para o container
COPY ./src ./src
COPY ./public ./public
COPY ./.eslintrc.json ./
COPY ./next.config.js ./
COPY ./package-lock.json ./
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./postcss.config.js ./
COPY ./tailwind.config.js ./
# Instalar as dependências Node
RUN npm install --ignore-scripts
# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
ENTRYPOINT [ "npm", "run", "dev" ]
# Dica: Leia a seção Docker e Docker-compose no README para mais informações