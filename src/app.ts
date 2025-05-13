import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // query String
    const [baseUrl] = req.url?.split("?") ?? ["", ""];

    // listar podcasts
    if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    // listar podcasts filtrados
    if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
}
