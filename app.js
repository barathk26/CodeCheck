function authenticateUser(username, password) {

    const storedPassword = process.env.ADMIN_PASSWORD;

    if (!storedPassword) {
        console.log("Password not configured");
        return false;
    }

    if (password === storedPassword) {
        console.log(`Welcome ${username}`);
        return true;
    }

    console.log("Invalid credentials");
    return false;
}

function printNumbers() {

    const numbers = [1, 2, 3];

    numbers.forEach((number) => {
        console.log(number);
    });
}

function main() {

    authenticateUser("Barath", "userPassword");

    printNumbers();
}

main();