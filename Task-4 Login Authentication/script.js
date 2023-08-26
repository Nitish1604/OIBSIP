const userDatabase = {};

function registerUser() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regUsername in userDatabase) {
        alert('Username alreay exists');
        return;
    }

    const hashedPassword = hashPassword(regPassword);
    userDatabase[regUsername] = hashedPassword;

    alert('Registration Successful');
}

function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPasssword = document.getElementById('loginPassword').value;

    if (!(loginUsername in userDatabase)) {
        alert('User not found');
        return;
    }

    const storedPassword = userDatabase[loginUsername];
    if (comparePasswords(loginPasssword, storedPassword)) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('registration').style.display = 'none';
        document.getElementById('h1').style.display = 'none';
        document.getElementById('securedPage').style.display = 'flex';
    } else {
        alert('Incorrect Password');
    }
}

function hashPassword(password) {
    return password;
}

function comparePasswords(inputPassword, storedPassword) {
    return inputPassword === storedPassword;
}
