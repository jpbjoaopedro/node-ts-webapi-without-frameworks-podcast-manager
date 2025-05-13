import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        // query String
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

        // listar podcasts
        if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(req, res);
        }

        // listar podcasts filtrados
        if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(req, res);
        }

    }
);


const port = process.env.PORT

server.listen(port, ()=> {
    console.log(`Servidor iniciado na porta: ${port}`);
})