function deleteElements(selectorsString) {
  const selectors = (selectorsString || '').split('\n').map(s => s.trim()).filter(s => s !== '');
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
  });
}

// Get the saved selectors from storage and apply them
chrome.storage.sync.get('selectors', (data) => {
  deleteElements(data.selectors);
});

// Listen for messages from the popup (in case selectors are updated)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applySelectors') {
    chrome.storage.sync.get('selectors', (data) => {
      deleteElements(data.selectors);
    });
  }
});

// Periodically check and delete elements (in case they load dynamically)
setInterval(() => {
  chrome.storage.sync.get('selectors', (data) => {
    deleteElements(data.selectors);
  });
}, 1000); // Check every 1 second (adjust as needed)
