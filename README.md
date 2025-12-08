# RestaurantPage
A dynamic, single-page restaurant website built using modern JavaScript, Webpack, and DOM manipulation. This project showcases the use of ES6 modules to organize code and bundle assets efficiently.

## 📖 About The Project

This project is a single-page web application where the entire DOM is generated via JavaScript. Unlike traditional static sites where content is hardcoded in HTML, this application dynamically renders different "tabs" (Home, Menu, Contact) by clearing and repopulating the main content container.

It serves as a practical implementation of:
* **Webpack** for asset bundling.
* **ES6 Modules** for separating application logic.
* **DOM Manipulation** for dynamic content rendering.

## 🛠 Technologies Used
* HTML5
* CSS
* JavaScript
* Webpack

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/joackimgr/RestaurantPage.git
    ```
2.  Navigate to the project folder
    ```sh
    cd RestaurantPage
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Build the project (if using a build script)
    ```sh
    npm run build
    ```
5.  Open `dist/index.html` in your browser to view the app.

## 📂 Project Structure

```text
RestaurantPage/
├── dist/               # Compiled files (index.html lives here after build)
├── src/                # Source files
│   ├── index.js        # Main entry point (tab switching logic)
│   ├── home.js         # Home page module
│   ├── menu.js         # Menu page module
│   ├── contact.js      # Contact page module
│   └── style.css       # Stylesheet
├── package.json        # Project metadata and dependencies
├── webpack.config.js   # Webpack configuration
└── README.md
