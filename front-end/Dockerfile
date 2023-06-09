# Usar a imagem node:16.14-alpine como base
FROM node:18.12.1-alpine
# Mudar para o diretório de trabalho /app-frontend
WORKDIR /app-frontend
# Copiar os package.json e package-lock.json para o container
COPY . .
# Instalar as dependências Node
RUN npm install
# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
ENTRYPOINT [ "npm", "run", "dev" ]
# Dica: Leia a seção Docker e Docker-compose no README para mais informações