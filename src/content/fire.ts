import { searchTextNode, putFire } from '.';

export const fire = async (e: MouseEvent) => {
  const nodes = document.body.childNodes;

  nodes.forEach((node) => searchTextNode(node));

  const fireWrapperElements = document.querySelectorAll('[data-fire-wrapper]');

  const { pageX, pageY } = e;

  putFire(pageX, pageY);

  // 文字を炎に切り替え
  fireWrapperElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    const characterX = rect.left + window.scrollX;
    const characterY = rect.top + window.scrollY;

    // クリック位置と文字の位置の距離
    const distance = Math.sqrt(
      Math.pow(pageX - characterX, 2) + Math.pow(pageY - characterY, 2),
    );

    // 徐々に広がるように、遠いほど切り替えを遅らせる
    const timeout = distance * 3;

    setTimeout(() => {
      if (
        element.firstChild instanceof HTMLSpanElement &&
        element.lastChild instanceof HTMLSpanElement
      ) {
        element.firstChild.style.opacity = '0';
        element.lastChild.style.opacity = '1';
      }
    }, timeout);
  });
};
