# Sitema de listagem de clientes (Media)
O projeto é uma aplicação web desenvolvida em Angular com o propósito de fazer login, criar nova conta de login, listar dados do cliente, filtrar os dados e mostrar detalhamento do cliente.

O sistema permite que usuários se autentiquem com suas credenciais e acessem a plataforma, onde podem criar novos usuários, visualizar informações detalhadas dos dados de cada cliente.

Além disso, a aplicação conta com um sistema de autorização que permite controlar o acesso de cada usuário às diferentes funcionalidades do sistema. A interface do usuário é amigável e intuitiva, facilitando a utilização da plataforma pelos usuários.

## Link do Projeto no Figma:
* [https://www.figma.com/community/file/1236884155579760360](https://www.figma.com/community/file/1236884155579760360)

## Como rodar o projeto na sua maquina

* Faça um clone do projeto a partir do repositório em que ele se encontra.

* Instale as dependências necessárias para o projeto. Para isso, abra o seu terminal e digite o seguinte comando:

* `npm install --force`

* (Observação: devido a um conflito nas dependências com a biblioteca agm, é necessário utilizar o --force.

* Agora execute o comando para rodar o FrontEnd do projeto:

* `npm start`

* Por fim, abrindo um outro terminal é necessário rodar o JSON-Server. Para isso, digite o seguinte comando no seu terminal:

* `npx json-server --watch db.json`

* Irá iniciar o servidor que será responsável por gerenciar os dados do login.

* Com isso, o projeto será iniciado em seu navegador e você poderá testá-lo em sua máquina.

#### Para login default - usuario: admin e Senha: admin

### Versão do Angular v15.2.4
#### Versão do Node v18.15.0
