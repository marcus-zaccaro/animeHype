import { AnimeModel } from './anime-model';

export interface ApiResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<AnimeModel>;
}
