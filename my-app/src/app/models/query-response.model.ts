import { SongModel } from '../components/songs/models/song.model';

interface SongListResponse {
  results: SongModel[];
}

export interface QueryResponseModel {
  error: boolean;
  response: SongListResponse;
}
