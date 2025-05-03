import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        // query String
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

        // listar podcasts
        if(req.method === "GET" && baseUrl === "/api/list"){
            await getListEpisodes(req, res);
        }

        // listar podcasts filtrados
        if(req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(req, res);
        }

    }
);


const port = process.env.PORT

server.listen(port, ()=> {
    console.log(`Servidor iniciado na porta: ${port}`);
})