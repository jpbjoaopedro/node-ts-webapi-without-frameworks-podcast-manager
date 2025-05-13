import { PodcastTranferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    let responseFormat: PodcastTranferModel = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    } 

    return responseFormat;
}