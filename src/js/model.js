import { areEqual } from './helpers';

const EMPTY = '__EMPTY__';

const playerX = {
  symbol: 'X'
};

const playerO = {
  symbol: 'O'
};

export default class Model {
  constructor() {
    this.board = [
      [ EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY ],
    ];
    this.players = [ playerX, playerO ];
    this.moveCount = 0;
    this.currentPlayer = null;
    this.currentMove = null;
    this.currentMoveRow = null;
    this.currentMoveColumn = null;
  }

  makeMove(cellIndex, callback) {
    this.currentMove = cellIndex;

    this.updateCurrentPlayer();
    this.updateCurrentRowColumn();
    this.updateBoardState();
    this.moveCount++;

    callback(cellIndex, this.currentPlayer.symbol, this.nextPlayer.symbol);
  }

  updateCurrentPlayer() {
    this.currentPlayer = this.players[this.moveCount % 2];
  }

  updateCurrentRowColumn() {
    this.currentMoveRow = this.currentMove % 3;
    this.currentMoveColumn = Math.floor(this.currentMove / 3);
  }

  updateBoardState() {
    this.board[this.currentMoveRow][this.currentMoveColumn] = this.currentPlayer.symbol;
  }

  get nextPlayer() {
    return (this.currentPlayer === playerX) ? playerX : playerO;
  }

  // the callback renders the given end state of the board
  checkForEndState(moveIndex, callback) {
    if (this.isRowEqual) {
      callback('winner', 'row', this.currentMoveRow);
    } else if (this.isColumnEqual) {
      callback('winner', 'column', this.currentMoveColumn);
    } else if (this.isLTRDiagonalEqual) {
      callback('winner', 'diagonal', 0);
    } else if (this.isRTLDiagonalEqual) {
      callback('winner', 'diagonal', 1)
    } else if (this.moveCount === 9) {
      callback('stalemate');
    }
  }

  get isRowEqual() {
    return areEqual(
        this.board[this.currentMoveRow][0],
        this.board[this.currentMoveRow][1],
        this.board[this.currentMoveRow][2]
    );
  }

  get isColumnEqual() {
    return areEqual(
        this.board[0][this.currentMoveColumn],
        this.board[1][this.currentMoveColumn],
        this.board[2][this.currentMoveColumn]
    );
  }

  get isLTRDiagonalEqual() {
    return this.isMoveOnLTRDiagonal && areEqual(this.board[0][0], this.board[1][1], this.board[2][2]);
  }

  get isRTLDiagonalEqual() {
    return this.isMoveOnRTLDiagonal && areEqual(this.board[0][2], this.board[1][1], this.board[2][0]);
  }

  get isMoveOnLTRDiagonal() {
    return (this.currentMove === 0) || (this.currentMove === 4) || (this.currentMove === 8);
  }

  get isMoveOnRTLDiagonal() {
    return (this.currentMove === 2) || (this.currentMove === 4) || (this.currentMove === 6);
  }
}
