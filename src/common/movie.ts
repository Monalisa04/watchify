export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  description: string;
  genre?: string;
  posterUrl: string;
  watchDate?: Date;
}
/*
export interface WatchListMovie extends Movie {
  watchDate: Date;
}
*/
