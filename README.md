<div align="center">
  <h1>🚀 Node.js GoStack Challenge Backend</h1>
  <p>
    <img src="https://img.shields.io/badge/Node.js-14.x-green?logo=node.js" />
    <img src="https://img.shields.io/badge/Express-4.x-blue?logo=express" />
    <img src="https://img.shields.io/badge/tests-Jest%20%7C%20Supertest-yellow?logo=jest" />
    <img src="https://img.shields.io/badge/license-MIT-brightgreen" />
  </p>
  <p>API RESTful para gerenciamento de repositórios, criada para o desafio GoStack da Rocketseat.</p>
</div>

---

## 📑 Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias e Bibliotecas](#tecnologias-e-bibliotecas)
- [Padrões de Projeto](#padrões-de-projeto)
- [Rotas da API](#rotas-da-api)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Testes Automatizados](#testes-automatizados)
- [Licença](#licença)
- [Autor](#-autor)

---

## 💡 Sobre o Projeto
Desafio backend do GoStack (Rocketseat): uma API REST para gerenciar repositórios, permitindo criar, listar, atualizar, remover e dar likes em repositórios. O projeto utiliza Node.js, Express e testes automatizados com Jest e Supertest.

---

## 🛠️ Tecnologias e Bibliotecas
- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **CORS**: Middleware para habilitar Cross-Origin Resource Sharing
- **uuidv4**: Geração de identificadores únicos (UUID)
- **Jest**: Testes automatizados
- **Supertest**: Testes de integração HTTP
- **Nodemon**: Hot reload para desenvolvimento

---

## 🏛️ Padrões de Projeto
- **RESTful API**: Estrutura de rotas seguindo boas práticas REST
- **Middlewares**: Uso de middlewares para JSON e CORS
- **Arquitetura modular**: Separação entre inicialização do app (`app.js`) e do servidor (`server.js`)
- **Testes automatizados**: Cobertura de testes para todas as rotas principais

---

## 📬 Rotas da API
- `POST /repositories` — Cria um repositório
  - Body: `{ "title": string, "url": string, "techs": string[] }`
- `GET /repositories` — Lista todos os repositórios
- `PUT /repositories/:id` — Atualiza título, url e techs de um repositório
- `DELETE /repositories/:id` — Remove um repositório
- `POST /repositories/:id/like` — Incrementa likes do repositório

---

## ⚙️ Como Rodar o Projeto
1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd Nodejs-template---GoStack
   ```
2. **Instale as dependências:**
   ```bash
   yarn install
   # ou npm install
   ```
3. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   yarn dev
   # ou npm run dev
   ```
   O servidor estará disponível em `http://localhost:3333`.

---

## 🧪 Testes Automatizados
- Para rodar os testes:
  ```bash
  yarn test
  # ou npm test
  ```
- Os testes cobrem todas as rotas principais, incluindo casos de sucesso e erro.
- Ferramentas: **Jest** e **Supertest**

---

## 📝 Licença
Este projeto está sob a licença MIT.

---

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>


