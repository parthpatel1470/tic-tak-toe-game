import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

import Board from './components/Board';
import ResetButton from './components/ResetButton';
import ScoreDialog from './components/ScoreDialog';

type Player = 'X' | 'O' | '';
type Score = {
  player1: number;
  player2: number;
  totalGames: number;
  totalDraws: number;
};

const initialBoard: Player[] = ['', '', '', '', '', '', '', '', ''];

const App = () => {
  const [board, setBoard] = useState<Player[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [scoreBoard, setScoreBoard] = useState<Score>({
    player1: 0,
    player2: 0,
    totalGames: 0,
    totalDraws: 0,
  });
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameGoingOn, setIsGameGoingOn] = useState<boolean>(false);
  const [showScoreDialog, setShowScoreDialog] = useState<boolean>(false);

  const checkWinner = (board: Player[]): string | null => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const [a, b, c] of winningPositions) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes('')) {
      return 'draw';
    }

    return null;
  };

  const handleWinner = (result: string | null) => {
    setIsGameGoingOn(false);
    setWinner(result);
    let newScoreBoard = {...scoreBoard};
    newScoreBoard.totalGames += 1;

    if (result === 'X') {
      newScoreBoard.player1 += 1;
    } else if (result === 'O') {
      newScoreBoard.player2 += 1;
    } else {
      newScoreBoard.totalDraws += 1;
    }
    setScoreBoard(newScoreBoard);
  };

  const handleCellPress = (index: number) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);

      const result = checkWinner(newBoard);
      if (result) {
        if (result === 'draw') {
          Alert.alert('Match Drawn', 'No one won the match!');
        } else {
          Alert.alert('Winner', `${result} won the match!`);
        }
        handleWinner(result);
      }
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
    setIsGameGoingOn(true);
  };

  const toggleScoreDialog = () => {
    setShowScoreDialog(!showScoreDialog);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tic Tac Toe</Text>
      <Board
        board={board}
        handleCellPress={handleCellPress}
        isGameGoingOn={isGameGoingOn}
      />
      {!isGameGoingOn && (
        <ResetButton resetGame={resetGame} totalGames={scoreBoard.totalGames} />
      )}
      {!isGameGoingOn && scoreBoard.totalGames > 0 && (
        <TouchableOpacity
          style={styles.scoreButton}
          onPress={toggleScoreDialog}>
          <Text style={styles.scoreButtonText}>Show Score</Text>
        </TouchableOpacity>
      )}
      <ScoreDialog
        scoreBoard={scoreBoard}
        visible={showScoreDialog}
        onClose={toggleScoreDialog}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  scoreButton: {
    backgroundColor: 'darkblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  scoreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
