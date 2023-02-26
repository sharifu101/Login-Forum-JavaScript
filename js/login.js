document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // User password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'rukonfpi@gmail.com' && userPassword == '12345') {
        window.location.href = 'banking.html';

    }
});
