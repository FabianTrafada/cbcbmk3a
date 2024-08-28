document.getElementById('loginForm').addEventListener("submit", function(event){
    event.preventDefault();

    const correctUsername = "Imam";
    const correctPassword = "123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        window.location.href = "index.html"
    } else {
        alert("Invalid username or password. Please try again.");
    }
})