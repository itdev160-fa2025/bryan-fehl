
// Message Content Variable
var messages = [];

// Lookup object for the message types
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Initial data for the chat

var data = [
    {
        type: messageType.out,
        user: 'Reggy',
        message: 'What you up to?'
    },
    {
        type: messageType.in,
        user: 'Ellen',
        message: 'Not much.  Just doing some homework.'
    },
    {
        type: messageType.out,
        user: 'Reggy',
        message: 'Fun lol.  Want to get some lunch?'
    }
];

// Message constructor
function Message(type, user, message) {
    this.type    = type;
    this.user    = user;
    this.message = message;
}

// fucntion that creats & returns an element for a supplied message.
function createMessageElement(message) {
    
    // Create a text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // Set the class of the message using pre-defined type
    messageEl.className = message.type;

    return messageEl;
}

// Event handler for the button that adds a new message
function addMessageHandler(event) {
    var user, type;
    var messageInput        = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
            user = 'Reggy';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Ellen';
            type = messageType.in;
            break;
        default:
            user = 'Unknown';
            type = messageType.unknown;
    }

    // Create the new message.
    if (messageInput.value != ''){

        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        // Create the element
        var el = createMessageElement(message);

        // Add the message element to the document
        messagesContainerEl.appendChild(el);

        // Clear the input field
        messageInput.value = '';
    }
}

// Used to import the initial data for the chat window
function loadSeedData() {
    for (var i = 0; i < data.length; i++ ) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    // Load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function () {
    // Create event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();