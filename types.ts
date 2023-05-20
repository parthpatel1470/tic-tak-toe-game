type Player = 'X' | 'O' | '';
type Score = {
  player1: number;
  player2: number;
  totalGames: number;
  totalDraws: number;
};

export type {Player, Score};
