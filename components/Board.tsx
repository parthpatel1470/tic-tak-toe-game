import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Player} from '../types';

type BoardProps = {
  board: Player[];
  handleCellPress: (index: number) => void;
  isGameGoingOn: boolean;
};

const Board: React.FC<BoardProps> = ({
  board,
  handleCellPress,
  isGameGoingOn,
}) => {
  const renderCell = (index: number) => (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => handleCellPress(index)}
      disabled={board[index] !== '' || !isGameGoingOn}>
      <Text style={styles.cellText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.board}>
      <View style={styles.row}>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </View>
      <View style={styles.row}>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </View>
      <View style={styles.row}>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    width: 300,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default Board;
