import { replaceFireHtml } from '.';

import { ignoreNodeNames } from './constants';

export const searchTextNode = (node: ChildNode) => {
  const nodeName = node.nodeName.toLowerCase();

  const isIgnoreNodeName = ignoreNodeNames.includes(nodeName);

  if (isIgnoreNodeName) {
    return;
  }

  // Elementの場合はさらに分割
  if (node.nodeType === Node.ELEMENT_NODE) {
    node.childNodes.forEach((node) => searchTextNode(node));
    return;
  }

  if (node.nodeType !== Node.TEXT_NODE) {
    return;
  }

  // テキストが無い場合
  if (!node.nodeValue) {
    return;
  }

  if (!(node.parentNode instanceof Element)) {
    return;
  }

  // 文字列の場合
  if (node.parentNode.childNodes.length === 1) {
    const fireHtml = replaceFireHtml(node.nodeValue);
    node.parentNode.innerHTML = fireHtml;
    return;
  }

  // Elementを含む場合
  const newNode = document.createElement('span');
  const fireHtml = replaceFireHtml(node.nodeValue);
  newNode.innerHTML = fireHtml
  node.parentNode.replaceChild(newNode, node);
};
