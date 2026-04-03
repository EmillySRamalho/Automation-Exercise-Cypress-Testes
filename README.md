

# Automation Exercise Cypress Testes

Projeto de automação de testes end-to-end com **Cypress**, desenvolvido para validar fluxos principais do site [Automation Exercise](https://automationexercise.com/).

## Sobre o projeto

Este repositório contém testes automatizados criados com o objetivo de praticar automação web utilizando Cypress, cobrindo cenários como:

- cadastro de usuário
- preenchimento de formulário
- navegação por categorias de produtos
- visualização de produto
- adição de item ao carrinho
- envio de review

## Tecnologias utilizadas

- **JavaScript**
- **Cypress**
- **Node.js**

## Estrutura do projeto

```bash
Automation-Exercise-Cypress-Testes/
├── cypress/
│   ├── e2e/
│   │   ├── automation.cy.js
│   │   └── login.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
└── package-lock.json
````

## Cenários automatizados

### 1. Cadastro de usuário

Arquivo: `cypress/e2e/login.cy.js`

Este teste realiza:

* acesso ao site
* entrada na área de login/cadastro
* preenchimento do formulário de criação de conta
* seleção de gênero
* preenchimento de senha e data de nascimento
* marcação de newsletter e ofertas
* preenchimento de endereço completo
* criação da conta

### 2. Fluxo de produto e carrinho

Arquivo: `cypress/e2e/automation.cy.js`

Este teste realiza:

* acesso ao site
* navegação até a seção de produtos
* filtro por categoria feminina
* seleção de produto
* alteração da quantidade
* adição ao carrinho
* preenchimento de review
* acesso ao carrinho
* início do checkout

## Como instalar o projeto

Clone o repositório:

```bash
git clone https://github.com/EmillySRamalho/Automation-Exercise-Cypress-Testes.git
```

Entre na pasta do projeto:

```bash
cd Automation-Exercise-Cypress-Testes
```

Instale as dependências:

```bash
npm install
```

## Como executar os testes

Para abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```

## Observações

* Os testes foram desenvolvidos com foco em prática de automação E2E.
* Alguns dados utilizados estão fixos no código, como nome, e-mail e senha.
* Dependendo do estado da aplicação, pode ser necessário ajustar massas de teste para evitar conflito com usuários já cadastrados.

## Objetivo

Este projeto foi criado para fortalecer conhecimentos em automação de testes com Cypress, praticando fluxos reais de navegação, cadastro e compra em uma aplicação web.



[1]: https://raw.githubusercontent.com/EmillySRamalho/Automation-Exercise-Cypress-Testes/main/package.json "raw.githubusercontent.com"
