export interface IGame {
  id: number;
  title: string;
  description: string;
  genre: string;
  cover: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface IGenre {
  id: number;
  title: string;
  description: string;
  minAge: string;
  created_at: string;
  updated_at: string;
}
