# docker-challenges-fullcycle
Respositório destinado aos desafios propóstos no curso fullcycle 3.0 desenvolvidos após participar das aulas préviamente aplicadas

## Desafio 1
Criar uma imagem com menos de **2MB**. Quando executada deve exibir a mensagem **Full Cycle Rocks!!** utilizando a linguagem **GO**

[Imagem hospedada no docker hub](https://hub.docker.com/repository/docker/isabelemoraes99/go/general)

### Como utilizar:

```
docker pull isabelemoraes99/go
```

## Desafio 2
Criar um docker compose para subir 3 container
1. Banco de dados
2. Node.js
3. Nginx

Ao acessar o Nginx, o mesmo deve acessar o node e devolver uma pagina com o seguinte conteudo:
```
<h1>Full Cycle Rock</h1>
- Lista de nomes cadastrados no banco
```

Tudo deve funcionar apenas levantando o docker compose e acessando http://localhost:8080

### Como utilizar
```
docker compode up -d
```