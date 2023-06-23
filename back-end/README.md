# Backend do Projeto de Receitas

Este é o repositório do backend para o projeto de receitas, uma aplicação full stack desenvolvida com Next.js no frontend, Go no backend e MySQL como banco de dados. O objetivo deste projeto é fornecer uma plataforma para consulta de receitas, onde os usuários podem pesquisar, favoritar e gerenciar suas receitas favoritas.

O backend foi desenvolvido utilizando o framework Gin-Gonic para gerenciamento de rotas e o ORM GORM para interação com o banco de dados MySQL. Além disso, foi implementado o uso do JWT (JSON Web Tokens) para controle de autenticação e acesso aos recursos protegidos.

A estrutura do backend segue uma arquitetura modular e organizada, com separação clara de responsabilidades. Os endpoints foram projetados para fornecer as funcionalidades necessárias para consulta de receitas, autenticação de usuários e gerenciamento de favoritos.

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento do backend, você precisará ter o Docker e o Docker Compose instalados em sua máquina. Essas ferramentas facilitarão a criação e execução dos containers necessários para a aplicação.

Siga as instruções fornecidas no [README](../README.md) principal do projeto para iniciar os containers utilizando o Docker Compose. Isso criará os ambientes de desenvolvimento do frontend, backend e banco de dados, prontos para serem utilizados.

## Autenticação
Alguns endpoints requerem autenticação. Para se autenticar, inclua o header Authorization em suas solicitações com um token de acesso válido. 
O token de acesso pode ser obtido fazendo login usando o endpoint /login.

## Endpoints

A API do backend do projeto de receitas fornece uma variedade de endpoints para interagir com a aplicação. Esses endpoints permitem que os usuários realizem a autenticação, cadastrem-se na plataforma, pesquisem e visualizem receitas, adicionem e removam receitas favoritas, entre outras funcionalidades.

### POST /login

Este endpoint é utilizado para autenticar um usuário na API. Ele permite que o usuário faça login fornecendo seu email e senha.

<details>
    <summary>Exemplo:</summary><br />

```
/login
```

Corpo da Requisição:
```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
Resposta:

Em caso de sucesso, a resposta será um objeto contendo o id, name, email e token de autenticação e status 200:
```json
{
  "id": 1,
  "name": "Lewis Hamilton",
  "email": "lewishamilton@gmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Em caso da requisição receber um email não cadastrado, a resposta sera um objeto com erro e menssagem com status 404:

```json
{
  "error": {},
  "message": "User not found"
}
```
Em caso da requisição receber um password invalido, a resposta sera um objeto com erro e menssagem e status 401:

```json
{
  "error": {},
  "message": "wrong password"
}
```
</details>

### POST /register

Este endpoint é utilizado para adicionar um novo usuário à base de dados.

<details>
    <summary>Exemplo:</summary><br />

```
/register
```

Corpo da Requisição:
```json
{
  "name": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
}
```
Resposta:

Em caso de sucesso, a resposta será o objeto com uma menssagem de sucesso e status 201:
```json
{
  "message": "user created"
}
```

</details>

### GET /recipes/page/"page"

Este endpoint retorna uma lista de dez receitas que se alteram em relação ao número recebido no endpoint "page", com status 200.
<details>
    <summary>Exemplo:</summary><br />

```
/recipes/page/0
```

Resposta:

```json
{
  "recipes": [
    {
      "ID": 1,
      "CreatedAt": "2023-06-19T18:23:10.448Z",
      "UpdatedAt": "2023-06-19T18:23:10.448Z",
      "DeletedAt": null,
      "title": "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
      "instructions": "Pat chicken dry with paper towels...",
      "image": "miso-butter-roast-chicken-acorn-squash-panzanella",
      "ingredients": [
        {
          "ID": 1,
          "CreatedAt": "2023-06-19T18:23:10.449Z",
          "UpdatedAt": "2023-06-19T18:23:10.449Z",
          "DeletedAt": null,
          "name": "'1 (3½–4-lb.) whole chicken",
          "recipes": null
        },
        {
          "ID": 2,
          "CreatedAt": "2023-06-19T18:23:10.449Z",
          "UpdatedAt": "2023-06-19T18:23:10.449Z",
          "DeletedAt": null,
          "name": "2¾ tsp. kosher salt, divided, plus more",
          "recipes": null
        },
        {
          ...
        },
      ]
        "user": null
    },
    {
      ...
    }
  ]
}
```
</details>

### GET /recipes/search?q="search"

Este endpoint retorna uma lista de receitas que se alteram em relação ao termo de busca "search", com status 200.
<details>
    <summary>Exemplo:</summary><br />

```
/recipes/search?q=miso
```

Resposta:

```json
{
  "recipes": [
    {
      "ID": 1,
      "CreatedAt": "2023-06-19T18:23:10.448Z",
      "UpdatedAt": "2023-06-19T18:23:10.448Z",
      "DeletedAt": null,
      "title": "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
      "instructions": "Pat chicken dry with paper towels...",
      "image": "miso-butter-roast-chicken-acorn-squash-panzanella",
      "ingredients": [
        {
          "ID": 1,
          "CreatedAt": "2023-06-19T18:23:10.449Z",
          "UpdatedAt": "2023-06-19T18:23:10.449Z",
          "DeletedAt": null,
          "name": "'1 (3½–4-lb.) whole chicken",
          "recipes": null
        },
        {
          "ID": 2,
          "CreatedAt": "2023-06-19T18:23:10.449Z",
          "UpdatedAt": "2023-06-19T18:23:10.449Z",
          "DeletedAt": null,
          "name": "2¾ tsp. kosher salt, divided, plus more",
          "recipes": null
        },
        {
          ...
        },
      ]
        "user": null
    },
    {
      ...
    }
  ]
}
```
</details>

### GET /recipes/:"id"

Este endpoint retorna uma receita especifica buscando pelo id, com status 200.
<details>
    <summary>Exemplo:</summary><br />

```
/recipes/1
```

Resposta:

```json
{
  "recipe": {
      "ID": 1,
      "CreatedAt": "2023-06-19T18:23:10.448Z",
      "UpdatedAt": "2023-06-19T18:23:10.448Z",
      "DeletedAt": null,
      "title": "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
      "instructions": "Pat chicken dry with paper towels...",
      "image": "miso-butter-roast-chicken-acorn-squash-panzanella",
      "ingredients": [
        {
          "ID": 1,
          "CreatedAt": "2023-06-19T18:23:10.449Z",
          "UpdatedAt": "2023-06-19T18:23:10.449Z",
          "DeletedAt": null,
          "name": "'1 (3½–4-lb.) whole chicken",
          "recipes": null
        },
        {
          "ID": 2,
          "CreatedAt": "2023-06-19T18:23:10.449Z",
          "UpdatedAt": "2023-06-19T18:23:10.449Z",
          "DeletedAt": null,
          "name": "2¾ tsp. kosher salt, divided, plus more",
          "recipes": null
        },
        {
          ...
        },
      ]
        "user": null
    },
    {
      ...
    }
}
```
</details>

### GET /images/<nome-da-imagem>

Este endpoint é utilizado para buscar as imagens de cada receita.

Resposta:

Em caso de sucesso, a resposta será a imagem correspondente ao endpoint.

<details>
    <summary>Exemplo:</summary><br />

```
/images/-fried-chicken-51238060.jpg
```
Resposta:

![image](./back-end/src/images/-fried-chicken-51238060.jpg)

</details>

### GET /favorites

Este endpoint retorna uma lista de receitas favoritas da pessoa usuária autenticada

<details>
    <summary>Exemplo:</summary><br />

```
/favorites
```

Resposta:

```json
{
  "favorites": [
    {
      "ID": 1,
      "CreatedAt": "2023-06-19T18:23:10.448Z",
      "UpdatedAt": "2023-06-19T18:23:10.448Z",
      "DeletedAt": null,
      "title": "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
      "instructions": "Pat chicken dry with paper towels...",
      "image": "miso-butter-roast-chicken-acorn-squash-panzanella",
      "ingredients": null,
      "users": null
    },
    {
      "ID": 2,
      "CreatedAt": "2023-06-19T18:23:10.457Z",
      "UpdatedAt": "2023-06-19T18:23:10.457Z",
      "DeletedAt": null,
      "title": "Crispy Salt and Pepper Potatoes",
      "instructions": "Preheat oven to 400°F and line a rimmed baking...",
      "image": "crispy-salt-and-pepper-potatoes-dan-kluger",
      "ingredients": null,
      "users": null
    },
    {
      "ID": 5,
      "CreatedAt": "2023-06-19T18:23:10.48Z",
      "UpdatedAt": "2023-06-19T18:23:10.48Z",
      "DeletedAt": null,
      "title": "Newton's Law",
      "instructions": "Stir together brown sugar and hot water in a cocktail shaker...",
      "image": "newtons-law-apple-bourbon-cocktail",
      "ingredients": null,
      "users": null
    }
  ]
}
```
</details>

### POST /favorites/<recipe-id>
Este endpoint adiciona uma receita favorita à pessoa usuária autenticada:

<details>
    <summary>Exemplo:</summary><br />

```
/favorites/1000
```

Resposta:

```json
{
  "message": "favorite inserted"
}
```
</details>

### DELETE /favorites/<recipe-id>
Este endpoint remove uma receita favorita da pessoa usuária autenticada:

<details>
    <summary>Exemplo:</summary><br />

```
/favorites/1000
```

Resposta:

```json
{
  "message": "favorite removed"
}
```
</details>

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir um Pull Request. Certifique-se de descrever detalhadamente as alterações propostas.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).