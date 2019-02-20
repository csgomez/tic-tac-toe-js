export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.bindHandleClick(this.handleCellClick.bind(this));
  }

  start() {
    console.log('The tic-tac-toe app has started!');
    this.view.setCurrentPlayerView(this.model.players[0].symbol);
  }

  handleCellClick(cellIndex) {
    this.model.makeMove(cellIndex, this.view.renderMove.bind(this.view));
    this.model.checkForEndState(cellIndex, this.view.renderEndState.bind(this.view));
  }

}
