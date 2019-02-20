export const qs = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

export const qsa = (selector, scope) => {
  return (scope || document).querySelectorAll(selector);
};

export const onClick = (target, handler) => {
  target.addEventListener('click', handler);
};

export const cellToRowColumn = cellIndex => {
  return [cellIndex % 3, Math.floor(cellIndex / 3)];
};

export const areEqual = (cellOne, cellTwo, cellThree) => {
  return (cellOne === cellTwo) && (cellTwo === cellThree);
};
