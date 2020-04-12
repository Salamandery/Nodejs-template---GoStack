const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // Retornar repositórios
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  // Recebendo dados informados pelo usuário
  const { title, url, techs } = request.body;

  // Iniciando cadastro do repositório
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  // Adicionando repositório no objeto repositories
  repositories.push(repository);

  // Retornando resposta ao cliente
  return response.json(repository); 
});

app.put("/repositories/:id", (request, response) => {
  // Recebendo dados informados pelo usuário
  const { title, url, techs } = request.body;

  // Buscando repositório que usuário deseja atualizar
  const repository = repositories.find(repository => repository.id === request.params.id);

  // Se o repositório não existir
  if (!repository) {
    // Mensagem de erro ao não encontrar repositório
    return response.status(400).send("Este repositório não existe");
  }

  // Atualizando informações
  repository.title = title;
  repository.url = url;
  repository.techs = techs;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  // Recebendo repositório que o usuário deseja deletar
  const { id } = request.params;

  // Buscando repositório que usuário deseja deletar
  const repository = repositories.find(repository => repository.id === id);

  // Se o repositório não existir
  if (!repository) {
    // Mensagem de erro ao não encontrar repositório
    return response.status(400).send("Este repositório não existe");
  }

  for (var i = 0; i < repositories.length; i++) {
    if (repositories[i].id === repository.id) {
      repositories.splice(i, 1);
      break;
    }
  }

  return response.status(204).json(repositories);
});

app.post("/repositories/:id/like", (request, response) => {
  // Id do repositório que o usuário curtiu
  const { id } = request.params;

  // Buscando repositório que usuário curtiu
  const repository = repositories.find(repository => repository.id === id);

  // Se o repositório não existir
  if (!repository) {
    // Mensagem de erro ao não encontrar repositório
    return response.status(400).send("Este repositório não existe");
  }
  // Incremento do like
  repository.likes += 1;

  return response.json(repository);
});

module.exports = app;
