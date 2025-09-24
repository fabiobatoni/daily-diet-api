# Daily Diet API

[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Fastify](https://img.shields.io/badge/-Fastify-FFCA28?logo=fastify&logoColor=white&style=for-the-badge)](https://www.fastify.io/)
[![SQLite](https://img.shields.io/badge/-SQLite-003B57?logo=sqlite&logoColor=white&style=for-the-badge)](https://www.sqlite.org/)
[![Knex](https://img.shields.io/badge/-Knex-2C3E50?logo=knex&logoColor=white&style=for-the-badge)](http://knexjs.org/)
[![Vitest](https://img.shields.io/badge/-Vitest-00BFFF?logo=vitest&logoColor=white&style=for-the-badge)](https://vitest.dev/)
[![Zod](https://img.shields.io/badge/-Zod-7B3FE4?logo=typescript&logoColor=white&style=for-the-badge)](https://zod.dev/)
[![Dotenv](https://img.shields.io/badge/-Dotenv-4CAF50?logo=dotenv&logoColor=white&style=for-the-badge)](https://github.com/motdotla/dotenv)

---

## 1. Introduction

Daily Diet API é uma API construída com Node.js, TypeScript e Fastify, projetada para gerenciar refeições de usuários. Ela permite registrar, editar, deletar e listar refeições, além de gerar métricas sobre a dieta de cada usuário.

Principais funcionalidades:

- Registro e autenticação de usuários via cookies
- CRUD completo de refeições
- Métricas de dieta (quantidade total, dentro/fora da dieta, melhor sequência)
- Validação de dados com Zod
- Banco de dados SQLite gerenciado via Knex

---

## 2. Getting Started

Para clonar o repositório:

```bash
# SSH
git clone git@github.com:fabiobatoni/daily-diet-api.git

# HTTPS
git clone https://github.com/fabiobatoni/daily-diet-api.git
```

## 2.1 Instalação

```bash
cd daily-diet-api
npm install
```

## 2.2 Local Development

```bash
npm run dev
```

O servidor ficará disponível em:

http://localhost:3333 (ou a porta configurada no seu .env)

## 2.3 Database Setup

```bash
# Criar as tabelas
npm run knex migrate:latest

# Reverter todas as migrations (opcional)
npm run knex migrate:rollback --all
```

## 3. Features

- ✅ Criar um usuário  
- ✅ Identificar o usuário entre as requisições  
- ✅ Registrar uma refeição feita, com as seguintes informações:
  - Refeições relacionadas a um usuário
  - Nome  
  - Descrição  
  - Data e hora  
  - Está dentro ou não da dieta
- ✅ Editar uma refeição (todos os dados acima)  
- ✅ Apagar uma refeição  
- ✅ Listar todas as refeições de um usuário  
- ✅ Visualizar uma única refeição  
- ✅ Recuperar métricas de um usuário:
  - Quantidade total de refeições registradas  
  - Quantidade total de refeições dentro da dieta  
  - Quantidade total de refeições fora da dieta  
  - Melhor sequência de refeições dentro da dieta
- ✅ O usuário só pode visualizar, editar e apagar as refeições que ele criou

## 4. Testing

A API utiliza Vitest para testes.

Para rodar todos os testes:

```bash
npx vitest run test/meals.spec.ts 

npx vitest run test/users.spec.ts
```