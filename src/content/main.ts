import { fire } from '.';

// backgroundから受信
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type === 'BLOW_UP') {
    document.addEventListener('click', fire, { once: true });
  }
});
