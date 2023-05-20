import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {Score} from '../types';

type ScoreDialogProps = {
  scoreBoard: Score;
  visible: boolean;
  onClose: () => void;
};

const ScoreDialog: React.FC<ScoreDialogProps> = ({
  scoreBoard,
  visible,
  onClose,
}) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Score</Text>
          <Text style={styles.modalText}>Player 1: {scoreBoard.player1}</Text>
          <Text style={styles.modalText}>Player 2: {scoreBoard.player2}</Text>
          <Text style={styles.modalText}>
            Total Games: {scoreBoard.totalGames}
          </Text>
          <Text style={styles.modalText}>
            Total Draws: {scoreBoard.totalDraws}
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScoreDialog;
