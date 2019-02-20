import { qs, qsa, onClick } from "./helpers";

export default class View {
  constructor() {
    this.board = qs('#board');
    this.cells = qsa('.cell');
    this.currentPlayerView = qs('#current_player');
  }

  bindHandleClick(handler) {
    for (let cellIndex = 0; cellIndex < this.cells.length; cellIndex++) {
      onClick(this.cells[cellIndex], () => {
        handler(cellIndex);
      })
    }
  }

  setCurrentPlayerView(playerSymbol) {
    this.currentPlayerView.textContent = playerSymbol;
  }

  renderMove(cellIndex, playerSymbol, nextPlayerSymbol) {
    this.cells[cellIndex].textContent = playerSymbol;
    this.setCurrentPlayerView(nextPlayerSymbol);
  }

  // state - { 'winner' , 'stalemate' }
  // winCondition - { 'row' , 'column' , 'diagonal' }
  // winValue - { 'rowNum' , 'columnNum' , '0 - ltr || 1 - rtl' }
  renderEndState(state, winCondition, winValue) {
    if (state === 'winner') {
      if (winCondition === 'row') {
        this.renderRowWin(winValue);
      } else if (winCondition === 'column') {
        this.renderColumnWin(winValue);
      } else if (winCondition === 'diagonal') {
        this.renderDiagonalWin(winValue);
      }
    } else if (state === 'stalemate') {
      this.renderStalemate();
    }
  }

  renderRowWin(rowNum) {
    console.log(`ROW ${rowNum} HAS WON`);
  }

  renderColumnWin(columnNum) {
    console.log(`COLUMN ${columnNum} HAS WON`);
  }

  // 0 - top left to bottom right
  // 1 - top right to bottom left
  renderDiagonalWin(diagonalNum) {
    if (diagonalNum === 0) {
      console.log('TOP LEFT TO BOTTOM RIGHT HAS WON');
    } else {
      console.log('TOP RIGHT TO BOTTOM LEFT HAS WON');
    }
  }


  renderStalemate() {
    console.log('STALEMATE HAS OCCURRED!');
  }
}
