export const toggleForm = (formType) => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    if (formType === "login") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

export const login = () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Implement your login logic here (e.g., send a request to the server for authentication)
    // For demonstration purposes, we'll just show an alert message
    alert(`Logged in with username: ${username}`);
}

export const signup = () => {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Implement your signup logic here (e.g., send a request to the server to create a new user)
    // For demonstration purposes, we'll just show an alert message
    alert(`Signed up with username: ${username}`);
}
