import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodCastModel> => {

    // interface de resposta
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    };


    // Busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);
    
    // Verifica se o podcast existe
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat
}