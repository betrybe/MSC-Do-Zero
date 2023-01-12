---
theme: 'night'
transition: 'slide'
title:  '26.1 Introdução ao desenvolvimento Web com NodeJS'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

## MSC do Zero!


--

## Objetivo da mentoria
<br>
<br>

- Criar um endpoint do tipo **post**
- Criar dois endpoint do tipo **get**
- Consolidar as responsabilidades de cada camada
- Trabalhar com o fluxo e tratativa de erros da requisição
- Realizar a escrita das informações em um banco mysql

--

## MySQL
<br>
<br>

- Container para macOS M1
```shell
docker run --name mysql-container --platform linux/amd64 -e MYSQL_ROOT_PASSWORD=docker -d -p 3306:3306 mysql
```

- Container para linux
```shell
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=docker -d -p 3306:3306 mysql
```