document.addEventListener('DOMContentLoaded', () => {
  const selectorsInput = document.getElementById('selectors');
  const saveButton = document.getElementById('saveSelectors');

  // Load saved selectors when the popup opens
  chrome.storage.sync.get('selectors', (data) => {
    if (data.selectors) {
      selectorsInput.value = data.selectors;
    }
  });

  saveButton.addEventListener('click', () => {
    const selectors = selectorsInput.value;
    chrome.storage.sync.set({ 'selectors': selectors }, () => {
      // Send a message to the content script to apply the changes
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content.js']
        });
      });
    });
  });
});
