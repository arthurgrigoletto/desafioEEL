# To-Do App

## Instalando Dependências

No terminal navegue até o diretório do projeto e execute:

```bash
  cd .../todo-app

  npm install
  ou
  yarn
```

```bash
  cd todo-app/client

  npm install
  ou
  yarn
```

Esse comando instalará todos os pacotes listados nos packages.json correspondentes: [Backend package.json](https://github.com/arthurgrigoletto/desafioEEL/blob/master/todo-app/package.json), [Frontend package.json](https://github.com/arthurgrigoletto/desafioEEL/blob/master/todo-app/client/package.json)

#### 2. Criar arquivo .env

O arquivo _.env_ é de extrema importância, porque é dele que toda a aplicação busca as credenciais, ele fica localizado no diretório root. Um modelo para todas as Chaves está localizado no _[.envexample](https://github.com/arthurgrigoletto/desafioEEL/blob/master/todo-app/.envexample)_

##### \* _O arquivo .env não subirá para o gitHub_

#### 3. Rodando localmente o servidor

Há alguns scripts disponibilizados para facilitar na hora do desenvolvimento. Na pasta raiz do aplicativo (todo-app) não na pasta client podemos rodar

- Esse comando rodará o servidor sem restartar automaticamente, a cada mudança será necessário parar o servidor no terminal e startar de novo.

  ```bash
    npm start
    ou
    yarn start
  ```

- Esse comando rodará o servidor ouvindo todas as mudanças que fizer no código, ou seja, ele sempre irá restartar o servidor a cada mudança

  ```bash
    npm run server
    ou
    yarn server
  ```

- Esse comando rodará tanto o servidor quando nossa aplicação web para retreino das skills do Assistant

  ```bash
    npm run dev
    ou
    yarn dev
  ```

## Running the tests

Você pode rodar os testes através do comandos:

- NPM

  ```bash
    npm run test
    ou
    npm run test:tdd
    ou
    npm run test:coverage
  ```

- YARN

  ```bash
    yarn test
    ou
    yarn test:tdd
    ou
    yarn test:coverage
  ```
