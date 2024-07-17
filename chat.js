document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    const botResponses = {
        "hello": "Hi there! How can I help you today?",
        "hi": "Hello! What can I do for you?",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "what is your name": "I am a simple chat bot.",
        "help": "Sure, how can I assist you?",
        "bye": "Goodbye! Have a great day!",
    };

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        return botResponses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        appendMessage(message, 'user');
        chatInput.value = '';

        const botResponse = getBotResponse(message);

        setTimeout(() => {
            appendMessage(botResponse, 'bot');
        }, 1000);
    }

    sendButton.addEventListener('click', handleSendMessage);

    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    });
});
