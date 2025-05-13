# Podcast Manager

Um serviço de gerenciamento de podcasts em vídeo com organização por categorias, inspirado na navegação estilo Netflix.

## 📌 Sobre

O Podcast Manager é uma API RESTful simples que permite listar e filtrar episódios de podcasts organizados por categorias como saúde, esporte, mentalidade e humor.

## 🚀 Recursos

- Listar todos os episódios de podcasts
- Filtrar episódios por nome de podcast
- Organização por categorias (saúde, esporte, etc.)
- API REST simples e eficiente

## 🔧 Tecnologias

- **Node.js**
- **TypeScript**
- **HTTP Module nativo** para implementação do servidor
- **tsx** para execução em desenvolvimento
- **tsup** para build de produção

## 📁 Estrutura do projeto

```
.
├── src/
│   ├── app.ts                    # Middleware principal da aplicação
│   ├── server.ts                 # Configuração do servidor HTTP
│   ├── controllers/              # Controladores de requisição
│   │   └── podcasts-controller.ts
│   ├── models/                   # Modelos de dados
│   │   ├── podcast-model.ts
│   │   └── podcast-transfer-model.ts
│   ├── repositories/             # Acesso aos dados
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json         # Mock de dados
│   ├── routes/                   # Rotas da API
│   │   └── routes.ts
│   ├── services/                 # Lógica de negócio
│   │   ├── filter-episodes-service.ts
│   │   └── list-episodes-service.ts
│   └── utils/                    # Utilitários
│       ├── content-type.ts
│       ├── http-methods.ts
│       └── status-code.ts
├── docs/                         # Documentação
├── .env                          # Variáveis de ambiente
├── package.json
└── tsconfig.json
```

## ⚙️ Instalação

1. Clone o repositório
```bash
git clone https://github.com/jpbjoaopedro/gerenciador-podcasts.git
cd gerenciador-podcasts
```

2. Instale as dependências
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com:
```
PORT=3333
```

## 🖥️ Executando o projeto

### Desenvolvimento
```bash
npm run start:dev
```

### Desenvolvimento com live reload
```bash
npm run start:watch
```

### Build para produção
```bash
npm run dist
```

### Executar build de produção
```bash
npm run start:dist
```

## 📡 API Endpoints

### GET /api/list
Retorna uma lista de todos os episódios de podcasts.

**Exemplo de resposta:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBIJM - Flow #319",
    "videoId": "pQSuQnUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### GET /api/episode?p={podcastName}
Retorna episódios filtrados por nome de podcast.

**Exemplo:** `/api/episode?p=flow`

**Exemplo de resposta:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBIJM - Flow #319",
    "videoId": "pQSuQnUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

## 📝 Licença

ISC