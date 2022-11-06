![Logo](https://res.cloudinary.com/marinho/image/upload/v1667759446/Project%20View/logo_doc_gpah97.png)

# Lsys System - Sistema para gerenciar treinamentos

Um projeto da faculdade sobre um sistema de controle de treinamentos (de diversos tipos) de funcionários para RH de empresas.

## Stack utilizada

**Front-end:** React, NextJS, Chakra UI, Recoil JS

**Back-end:** Nest JS, Docker

## Funcionalidades

- Validação de token JWT
- Sistema integrado de permissões rota a rota
- Documentação automatizada
- Validação automatizada

## Rodando localmente

Para instalar as dependências e rodar o projeto, você precisar ter instalado:

- Node JS v16+
- Yarn Package Manager
- Docker
- Docker Compose

Para acessar o [Frontend](https://github.com/vmarinho22/ls-frontend) desse projeto, [clique aqui!](https://github.com/vmarinho22/ls-frontend)

Clone o projeto

```bash
  git clone https://github.com/vmarinho22/ls-backend
```

Entre no diretório do projeto

```bash
  cd ls-backend
```

Clone o arquivo `.env.example`, renomeie para `.env` e insira as informações necessárias nas variáveis de ambiente.

Suba os containers necessários para iniciar o banco de dados.

```bash
  sudo docker compose up -d //or sudo docker-compose up -d
```

- Aviso: Caso não preencha o env corretamente, o docker não subirá os containers corretamente, assim impossibilitando o uso do projeto.

Instale as dependências

```bash
  yarn //or yarn install
```

### Iniciando no modo de desenvolvimento

Após a instalação das dependências, inicie o servidor Nest JS

```bash
  yarn start:dev
```

### Iniciando no modo de produção

Após a instalação das dependências, realize o build do projeto:

```bash
  yarn build
```

E quando finalizar, inicie o servidor Nest JS

```bash
  yarn start
```

## Documentação da API

#### Para visualizar a documentação da API, basta entrar na seguinte rota

```http
  /docs
```

Lá você encontrará todas as rotas documentas e seus parametros necessários.

## Autores

- [@vmarinho22](https://www.github.com/vmarinho22)
