// クリックした場所に炎を置く
export const putFire = (x: number, y: number) => {
  const element = document.createElement('span');
  element.style.position = 'absolute';
  element.style.left = `${x - 15}px`;
  element.style.top = `${y - 15}px`;
  element.style.fontSize = '30px';
  element.innerText = '🔥';

  document.body.appendChild(element);
};
