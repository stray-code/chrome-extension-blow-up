// スペース系以外の文字をfire-wrapperのHTMLに変換
export const replaceFireHtml = (string: string) => {
  return string.replaceAll(
    /(\S)/g,
    '<span data-fire-wrapper style="position: relative"><span>$1</span><span style="position: absolute; left: 0; top: 0; opacity: 0;">🔥</span></span>',
  );
};
