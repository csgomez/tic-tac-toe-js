import Controller from './controller';
import Model from './model';
import View from './view';

const model = new Model();
const view = new View();

const controller = new Controller(model, view);

window.addEventListener('load', () => {
  controller.start();
});
