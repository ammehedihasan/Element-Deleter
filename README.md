# Custom Element Deleter Chrome Extension

A simple Chrome extension that allows you to remove specific, distracting elements from any webpage by providing CSS selectors. This is particularly useful for creating a more focused Browse experience on sites like YouTube, where you might want to hide recommendations, comments, or other non-essential sections without relying on pre-built solutions.

## ✨ Features

* **Customizable Blocking:** Specify which elements to hide using standard CSS selectors.
* **Persistent Settings:** Your chosen selectors are saved and automatically applied across Browse sessions.
* **Dynamic Deletion:** Periodically checks for and removes elements that might load after the initial page render.
* **Simple Interface:** Easy-to-use popup to manage your blocked elements.

## 🚀 Installation

Follow these steps to install the extension in your Chrome browser:

1.  **Download the Files:**
    * Create a new folder on your computer (e.g., `CustomElementDeleter`).
    * Save the following files inside this folder:
        * `manifest.json`
        * `popup.html`
        * `popup.js`
        * `content.js`
    * Inside the folder, create another folder named `images`.
    * Place your extension icons (e.g., `icon16.png`, `icon48.png`, `icon128.png`) inside the `images` folder. You can use simple placeholder images for now, or create your own.

2.  **Load in Chrome:**
    * Open your Chrome browser.
    * Type `chrome://extensions/` into the address bar and press Enter.
    * In the top right corner, toggle on **"Developer mode"**.
    * Click the **"Load unpacked"** button that appears in the top left.
    * Navigate to and select the `CustomElementDeleter` folder you created in step 1.

3.  **Pin the Extension (Optional but Recommended):**
    * After loading, the extension icon (a puzzle piece icon if you don't have custom icons) will appear in your browser's toolbar.
    * Click the puzzle piece icon, then click the pin icon next to "Custom Element Deleter" to keep it visible in your toolbar for easy access.

## 💡 Usage

1.  **Navigate to the Website:** Go to the webpage where you want to hide elements (e.g., `https://www.youtube.com/`).
2.  **Open the Extension Popup:** Click on the "Custom Element Deleter" icon in your Chrome toolbar.
3.  **Enter CSS Selectors:** In the text area provided, enter the CSS selectors of the elements you wish to hide.
    * Enter **one selector per line**.
    * For example, to hide YouTube's related videos section, you might enter:
        ```
        #related
        ytd-watch-next-secondary-results-renderer
        ```
4.  **Save and Apply:** Click the "Save and Apply" button. The extension will immediately attempt to remove the specified elements from the current page and will continue to do so as you browse.

## 🔍 How to Find CSS Selectors

To identify the correct CSS selectors for the elements you want to remove:

1.  **Right-click:** On the webpage, right-click on the specific element you want to hide.
2.  **Inspect:** Select "Inspect" (or "Inspect Element") from the context menu. This will open Chrome's Developer Tools.
3.  **Locate Element:** In the "Elements" tab of the Developer Tools, the HTML code for the element you right-clicked will be highlighted.
4.  **Find ID or Class:** Look for unique identifiers like `id="some-id"
