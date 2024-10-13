
/*
    Javascript for Activity 5
*/

// Create fake data by using multiple objects contained within an array
var data = [
    {
        name: "Liquid",
        description: "The Liquid extension is a must have for those developing Shopify themes using VS Code.",
        author: "panoply",
        url: "https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid",
        downloads: 291086,
        stars: 4,
        price: "Free",
        selector: "p1"
    },
    {
        name: "ESLint",
        description: "This extension integrates ESLint into VS Code, and it requires you to have already installed ESLint on your computer.",
        author: "Microsoft",
        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
        downloads: 38261692,
        stars: 4.5,
        price: "Free",
        selector: "p2"
    }
];

// Create extension class that will be used to store the above data
class Extension {
    constructor(data) {
        this.name        = data.name;
        this.description = data.description;
        this.author      = data.author;
        this.url         = data.url;
        this.downloads   = data.downloads;
        this.stars       = data.stars;
        this.selector    = data.selector;

        // Converts the download count to a string
        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        // Converts the star count to a string
        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }
}

// Get todays date and return it as a string
function getTodaysDate() {
    var today = new Date();
    return today.toDateString();
}

// Simple function for retrieving the element of the document by an ID
function getEl(id) {
    return document.getElementById(id);
}

// Function that handles writing the data to the document itself.
function writeExtensionInfo(extension) {
    var selector   = extension.selector,
        nameEl     = getEl(selector + '-name'),
        descEl     = getEl(selector + '-description'),
        authEl     = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl    = getEl(selector + '-stars');

    nameEl.textContent     = extension.name;
    descEl.textContent     = extension.description;
    authEl.textContent     = extension.author;
    downloadEl.textContent = extension.getFormattedDownloads();
    starsEl.textContent    = extension.getFormattedStars();
}

// Main function that kicks off the other processes
function initContent() {
    var dateEl             = getEl('date');
    var i = 0;
    dateEl.textContent = getTodaysDate();

    for (var i; i < data.length; i++) {
        var extension = new Extension(data[i]);
        writeExtensionInfo(extension);
    }

};

// Main script execution start
initContent();