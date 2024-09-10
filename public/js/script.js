var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatcontainer = document.getElementById('chatContainer');

var user = { message: "" };

var arrayOfPossibleMessages = [
    { message: "hi", response: "hello" },
    { message: "how are you?", response: "I'm good, thank you!" },
    { message: "bye", response: "Goodbye!" }
   
];



function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";
    
    messageElement.innerHTML = "<span>You: </span>" +
                               "<span>" + userMessage + "</span>";
    chatcontainer.appendChild(messageElement);
}



function chatbotResponse(userMessage) {
    var chatbotMessage = "";

    if (userMessage.toLowerCase() === "hi") {
        chatbotMessage = "hello dear";
    } else {
        chatbotMessage = "I received your message: " + userMessage;
    }

    var messageElement = document.createElement('div');
    
    messageElement.style.textAlign = "left";
    messageElement.style.margin = "10px";
    
    messageElement.innerHTML = "<span>Radha: </span>" +
                               "<span>" + chatbotMessage + "</span>";
    chatcontainer.appendChild(messageElement);
}


sendBtn.addEventListener('click', function(e) {
    var userMessage = textbox.value;
   
    if (userMessage === "") {
        alert('Please type a message');
    } else {
        let userMessagetext = userMessage.trim();
        user.message = userMessagetext;
        textbox.value = "";
        sendMessage(userMessagetext);

        setTimeout(function() {
            chatbotResponse(userMessagetext);
        }, 1000);
    }
});
