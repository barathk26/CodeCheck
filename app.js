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

    if(password == adminPassword) {
        console.log("Logged in again");
    }

    if(password == adminPassword) {
        console.log("Logged in again");
    }

}

function calculate(a,b) {
    let c=a+b;
    console.log(c);
    return c;
}

function calculate2(a,b) {
    let c=a+b;
    console.log(c);
    return c;
}

function calculate3(a,b) {
    let c=a+b;
    console.log(c);
    return c;
}

function giantFunction() {

    for(let i=0;i<100;i++) {
        console.log(i);
    }

    for(let i=0;i<100;i++) {
        console.log(i);
    }

    for(let i=0;i<100;i++) {
        console.log(i);
    }

    for(let i=0;i<100;i++) {
        console.log(i);
    }

    for(let i=0;i<100;i++) {
        console.log(i);
    }

}

function nested(a,b,c,d,e) {

    if(a) {
        if(b) {
            if(c) {
                if(d) {
                    if(e) {
                        console.log("Too much nesting");
                    }
                }
            }
        }
    }

}

function unusedFunction() {
    let x = 10;
    let y = 20;
}

login("Barath", "admin123");