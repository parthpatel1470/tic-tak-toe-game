import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ResetButtonProps = {
  resetGame: () => void;
  totalGames: number;
};

const ResetButton: React.FC<ResetButtonProps> = ({
  resetGame,
  totalGames,
}: {
  resetGame: () => void;
  totalGames: number;
}) => {
  const buttonText = totalGames === 0 ? 'Play' : 'Play Again';

  return (
    <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
      {totalGames !== 0 && <Icon name="refresh" size={25} color="#fff" />}
      <Text style={styles.resetButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: 'darkblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ResetButton;
