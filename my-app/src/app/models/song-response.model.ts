import { SimilarSongModel } from '../components/songs/models/similar-song.model';

interface SimilarityListResponse {
  similarity_list: SimilarSongModel[];
}

export interface SongResponseModel {
  error: boolean;
  response: SimilarityListResponse;
}
