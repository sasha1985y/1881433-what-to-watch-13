export type TFilm = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

export type TFullFilmInfo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}