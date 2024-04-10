# Use uma imagem base do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY package.json ./
COPY . .
COPY tsconfig.json ./
COPY src ./src

# Instale as dependências
RUN npm install

# Expõe a porta que o aplicativo está ouvindo
EXPOSE 3334

# Comando para iniciar o aplicativo
CMD ["npm", "start"]