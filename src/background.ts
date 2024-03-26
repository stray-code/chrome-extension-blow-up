chrome.runtime.onInstalled.addListener(() => {
  // コンテキストメニューに追加
  chrome.contextMenus.create({
    id: 'blowUp',
    title: 'Click here to activate blow up.',
    contexts: ['all'],
  });
});

// コンテキストメニューがクリックされたら発火
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab || !tab.id) {
    return;
  }

  if (info.menuItemId === 'blowUp') {
    // content_scriptsに送信
    chrome.tabs.sendMessage(tab.id, { type: 'BLOW_UP' });
  }
});
