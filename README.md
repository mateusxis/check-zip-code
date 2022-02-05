# Check Zip Code

### 🗃 Requisitos

São necessários os seguintes programas:

- Git
- Docker
- Docker Compose
- Node.js (Opcional caso queira prosseguir sem o docker)

## Instalação

```sh
yarn install
```

#### Rodando a aplicação pelo package.json

Ambiente de desenvolvimento (localhost:4000)

```sh
yarn start-dev
```

Ambiente de Produção (localhost:4000)

```sh
yarn start
```

#### Rodando a aplicação com Docker

Ambiente de desenvolvimento (localhost:4000)

```sh
docker-compose up
```

Ambiente de Produção (localhost:3000)

```sh
docker-compose -f docker-compose.prod.yml up
```

### Escolhas Técnicas

**Koa** - Foi utilizado esta ferramenta para gerar o servidor e suas dependências.

**ESLint e Prettier** - Foram utilizadas para o ambiente de desenvolvimento, tenha o código esteja padronizado e organizado sempre da mesma maneira.

<hr/>

<p align="center">
    com 🦎 Mateusxis 2022
</p>
