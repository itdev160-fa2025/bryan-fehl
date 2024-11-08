
// Returns a DOM element by specifying an ID
function get(element) {
    return document.getElementById(element);
}

// Shows the modal/backdrop
function openModal(){
    var modal    = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

// Hides the modal & backdrop, and clears the text
function closeModal() {
    var title    = get('edit-title-text');
    var text     = get('edit-content-text');
    var modal    = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Clear out input
    title.value = '';
    text.value  = '';

    // Hide the modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

// Gets the user input, creates blog post element, adds a new post to the page, and then closes the modal
function saveContent() {
    var title   = get('edit-title-text');
    var text    = get('edit-content-text');
    var content = get('display-content');

    // Create elements for the content
    var newTitle     = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent   = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add the element content

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

// Setup the event handlers
window.addEventListener('load', function() {
    var newButton    = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton   = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});