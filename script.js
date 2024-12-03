<script>
    // Select elements
    const chatbox = document.querySelector('.chatbox');
    const chatboxToggle = document.querySelector('.chatbox-toggle');
    const chatboxClose = document.querySelector('.chatbox-close');
    const chatboxForm = document.querySelector('.chatbox-form');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.getElementById('chat-input');

    // Toggle Chatbox
    chatboxToggle.addEventListener('click', () => {
        chatbox.style.display = 'flex';
        chatboxToggle.style.display = 'none';
    });

    chatboxClose.addEventListener('click', () => {
        chatbox.style.display = 'none';
        chatboxToggle.style.display = 'flex';
    });

    // Handle Message Submission
    chatboxForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            chatInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                addMessage('bot', `You said: "${userMessage}". How else can I help?`);
            }, 1000);
        }
    });

    // Function to Add Message
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
</script>
