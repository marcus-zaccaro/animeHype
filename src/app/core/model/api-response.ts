import { AnimeModel } from './anime-model';
import { NavigationLinkModel } from './navigation-link-model';

export interface ApiResponse {
    data: Array<AnimeModel>;
    links: NavigationLinkModel;
}
