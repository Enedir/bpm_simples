# BPM Simples

BPM Simples é um exemplo de uma aplicação responsiva implementada em Angular 6, Spring Boot 2 e MySQL. 

## Como Usar ?

Para utilizar a aplicação é necessário, seguir os seguintes passos:

* Passo 1
Executar esse script no MySQL para gerar o banco.

```bash
CREATE DATABASE bpm_app;
```

* Passo 2
Configurar o arquivo application.propeties, como as configurações de sua maquina. Que se localiza no modulo web da aplicação Spring Boot 2.

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/bpm_app?useUnicode=yes&characterEncoding=UTF-8&useSSL=false&useTimezone=true&serverTimezone=UTC
spring.datasource.driver-class=com.mysql.jdbc.Driver;
spring.datasource.username= Seu Usuario
spring.datasource.password= Sua Senha
```

* Passo 3
Executar a aplicação na IDE da usa preferência, que tenha suporte ao Spring Boot, e executar a web API. Toda vez que a web API for executada o aplicar irá recriar as tabela no banco.

* Passo 4
Executar esse comando na pasta bpm-cli, para o npm baixar todas as bibliotecas da aplicação.
```bash
npm install 
```

* Passo 5
Execute esse comando na pasta bpm-cli, para poder executar o servidor interno no Node. 
```bash
ng serve 
```

* Passo 5
Verifique a porta que o servidor a aplicação Spring Boot 2 esta rodando, e troque a url no arquivo environment, se o caminho ou a porta for mudada no projeto bpm-cli.
```
export const environment = {
  production: false,
  url: 'http://localhost:8080/api'
};
```