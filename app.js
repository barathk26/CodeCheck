function login(user, password) {

    var adminPassword = "admin123";

    if(password == adminPassword) {
        eval("console.log('Welcome ' + user)");
    }

    if(password == adminPassword) {
        console.log("Logged in");
    }

    if(password == adminPassword) {
        console.log("Logged in again");
    }

}

function hugeFunction() {

    let x = 1;
    let y = 2;
    let z = 3;

    console.log(x);
    console.log(y);
    console.log(z);

    console.log(x);
    console.log(y);
    console.log(z);

    console.log(x);
    console.log(y);
    console.log(z);

    console.log(x);
    console.log(y);
    console.log(z);
}

login("Barath", "admin123");