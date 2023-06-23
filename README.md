# Projeto de Receitas Full Stack

Este é um projeto de receitas full stack que utiliza as seguintes tecnologias:

- Frontend: Next.js com Tailwind CSS e TypeScript
- Backend: Go com Gin-Gonic e GORM
- Banco de Dados: MySQL
- Docker e Docker Compose

## Descrição

O objetivo deste projeto é criar uma aplicação web para gerenciamento de receitas. Os usuários podem visualizar receitas, favoritar suas receitas favoritas e ver quais são as receitas favoritas deles. A aplicação foi desenvolvida utilizando Next.js com Tailwind CSS e TypeScript no frontend, Go com Gin-Gonic e GORM no backend, e o banco de dados MySQL para armazenar as informações das receitas e dos usuários. O Docker e o Docker Compose foram utilizados para facilitar o desenvolvimento e configuração do ambiente.

## Funcionalidades

- Listar receitas: Os usuários podem visualizar uma lista de receitas existentes.
- Favoritar receitas: Os usuários podem marcar as receitas como favoritas.
- Ver receitas favoritas: Os usuários podem ver quais são as receitas que eles favoritaram.
- Cadastrar usuário: Os usuários podem criar uma conta para acessar a aplicação.

## Tecnologias Utilizadas

- Frontend:
  - Next.js: Um framework React para construção de interfaces web.
  - Tailwind CSS: Uma biblioteca de CSS utilitária para estilização rápida e responsiva.
  - TypeScript: Uma linguagem de programação para adicionar tipagem estática ao JavaScript.
  - React Hook Form: Uma biblioteca para criação de formulários com validação.
  - Zod: Uma biblioteca de validação de esquemas para TypeScript.

- Backend:
  - Go: Uma linguagem de programação eficiente e concorrente para desenvolvimento de APIs e serviços web.
  - Gin-Gonic: Um framework web leve para criar APIs em Go.
  - GORM: Uma biblioteca ORM para Go, que facilita a interação com bancos de dados relacionais.
  - JWT: Um método seguro para autenticação e controle de acesso.
  - API RESTful: Utilização de endpoints para comunicação entre frontend e backend.

- Banco de Dados:
  - MySQL: Sistema de gerenciamento de banco de dados relacional.

- Testes
  - Jest: Um framework de teste JavaScript para testes unitários e de integração.
  - React Testing Library: Uma biblioteca para testar componentes React de forma simplificada.

- Docker e Docker Compose:
  - Docker: Uma plataforma para desenvolvimento, envio e execução de aplicativos utilizando containers.
  - Docker Compose: Uma ferramenta para definir e executar aplicativos Docker multi-container.

## Configuração do Ambiente

Antes de iniciar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- Docker: Versão X.X.X ou superior.
- Docker Compose: Versão X.X.X ou superior.

Para configurar o ambiente de desenvolvimento utilizando o Docker Compose, siga os passos abaixo:

1. Clone o repositório do projeto: 
```
git clone git@github.com:Josieljcc/recipe-app-full-stack.git
```
2. Acesse a pasta do projeto:
```
cd recipe-app-full-stack
```
3. Execute o comando para criar e iniciar os containers.
```
docker-compose up
```
4. Acesse a aplicação no navegador: 
```
http://localhost:3000
```

Os containers Docker serão configurados com todas as dependências necessárias para o frontend, backend e banco de dados.

## Script para Popular o Banco de Dados

O projeto utiliza um script em Go para ler um arquivo CSV com dados de receitas e populá-los no banco de dados MySQL. O script está localizado no diretório `src/database/csvRead/csvRead.go` do container do backend.

Para executar o script, siga as etapas abaixo:

1. Acesse o container do backend: 
```
docker exec -it app_backend /bin/bash
```
2. Navegue até o diretório do script: 
```
cd src/database/csvRead
```
3. Execute o script: 
```
go run csvRead.go
```

O script irá ler o arquivo CSV e popular o banco de dados com os dados das receitas, por conta da grande quantidade de receitas o script poderá levar alguns minutos, esse tempo pode variar dependendo do computador que vai executar o scrip.

## Imagens da Aplicação

![Imagem 1](caminho/para/imagem1.png)
*Legenda da Imagem 1*

![Imagem 2](caminho/para/imagem2.png)
*Legenda da Imagem 2*

![Imagem 3](caminho/para/imagem3.png)
*Legenda da Imagem 3*

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir um Pull Request. Certifique-se de descrever detalhadamente as alterações propostas.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
