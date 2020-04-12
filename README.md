## Desafio Back-end nodejs GoStack

### Descrição
Aplicação feita para o desafio GoStack da rocketseat com a finalidade de criar repositórios que contenham um título, url do repositório e tecnologias utilizadas. Template configurado com Jest para testes automatizados que verificará se o repositório existe antes de excluir ou atualizar ou até mesmo dar um likes. :)

### Rotas
- **`POST /repositories`**: Rota de cadastro e ela deve receber os parâmetros `title`, `url` e `techs` dentro do body da requisição. Exemplo: `{ title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."] }`;

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: Rota de atualização dos dados (`title`, a `url` e as `techs`) do repositório que possua um `id` de um repositório anteriormente cadastrado;

- **`DELETE /repositories/:id`**: Rota que irá deletar o repositório com um `id` existente;

- **`POST /repositories/:id/like`**: Rota que irá aumentar o número de likes do repositório específico, identificado através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;


Rodolfo M F Abreu
