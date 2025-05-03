# Podcast Manager

### Descrição

Um app parecido com netflix, separando por categoria os episódios

### Domínio

Podcasts feitos em vídeo

### Features
 - Listas os episódios de podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
 - Filtrar episódios por nome de podcast


### Como vou implementar:

GET: retorna lista de episódios

reponse:
```js
[
   {
      podcastName: "flow",
      episode: "CBIJM - Flow #319",
      videoId: "pQSuQnUfS30",
      cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
      categories: ["saúde", "esporte", "bodybuilder"]
   },
   {
      podcastName: "flow",
      episode: "RUBENS BARRICHELLO - Flow #339",
      videoId: "4KDGTdiOV4I",
      cover: "https://i.ytimg.com/vi/4KDGTdiOV41/maxresdefauIt.jpg",
      link: "https://www.youtube.com/watch?v=4KDGTdiOV41",
      categories: ["esporte", "corrida"]
   }
]
```

GET: retorna lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast