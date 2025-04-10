let username = 123;
let password = 456;

// if (username === 123 && password === 456) {
//     console.log("Login Successful");
// }
// else {
//     console.log("Login Failed");
// }

if (username && password) {
    if (username === 123) {

        console.log("Correct UserName!");

        if (password === 456) {

            console.log("Correct Password!");

            if (username === 123 && password === 456) {
                console.log("Login Successfull !");
            }
            else {
                console.log("Incorrect Username and Password !");
            }
        }
        else {
            console.log("Incorrect Password!");
        }
    }
    else {
        console.log("Incorrect UserName !");
    }
}
else {
    console.log("Login Fail");
}