function generateQuestion() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="card">
            <h1>Will you be my Val?</h1>
            <div class="button-container">
                <button onclick="showInputForm()">Yes</button>
                <button onclick="showThankYou()">No</button>
            </div>
        </div>
    `;
}

function showInputForm() {
    const card = document.querySelector('.card');
    card.innerHTML = `
        <h1>Sweet Moments of Love</h1>
        <h4>Embracing the Essence of Valentine's Day <br> Let Love Blossom</h4>
        <div class="input-container">
            <label for="username">Your Name:</label>
            <input type="text" id="username" placeholder="Enter your name">
        </div>
        <button class="pulse" onclick="redirectToThankYou()">Generate</button>
    `;
}

function redirectToThankYou() {
    // Retrieve the username from the input field
    const username = document.getElementById('username').value;

    // Check if the username is not empty
    if (username.trim() === "") {
        alert("Please enter your name before generating the gift.");
        return; // Exit the function if the username is empty
    }

    // Redirect to thankyou.html with the username as a query parameter
    window.location.href = `thankyou.html?name=${encodeURIComponent(username)}`;
}



function showThankYou() {
    const card = document.querySelector('.card');
    card.innerHTML = `
        <h1>Thank You</h1>
        <p>Thank you for your response!</p>
    `;
}
