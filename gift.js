// gift.js
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('name');
    const loveMessageElement = document.getElementById('loveMessage');
    
    // Update the love message with the personalized greeting
    if (username) {
        loveMessageElement.innerHTML = `<h3>I love you, ${username}.</h3>`;
    } else {
        loveMessageElement.innerHTML = `<h3>I love you.</h3>`;
    }
});
