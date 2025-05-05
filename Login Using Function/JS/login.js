// function username() {
//     userid = document.getElementById(n3);
// }
// function password() {
//     userpass = prompt("Enter Your passeword: ");
// }

// username()
// // id = 123
// // pass = 456

// if (userid) {
//     console.log("Your User id is " + userid);
//     password()
//     if (userpass) {
//         console.log("Your Password is " + userpass);
//         alert("Login Suucess")
//     }
//     else {
//         password();
//         console.log("Invalid Password");
//     }
// }
// else {
//     username();
//     alert("Invalid Username");
// }

function demo() {
    alert("Submit")
    prompt("")
}


let id = 123;
let pass = 456;
let number;
let email;
function data() {
    if (id == document.getElementById("fName").value) {
        alert("Id Was right");

        if (number = document.getElementById("number").value, number.length < 10 || number.length > 10) {
            alert("Number is not valid");

            if (pass == document.getElementById("password").value) {
                alert("Pass right");

                if (email = document.getElementById("email").value, email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                    alert("Email right");
                }
                else {
                    alert("Wrong Email")
                }
            }
            else {
                alert("pass wrong");
            }
        }
        else {
            alert("Number is valid");
        }
    }
    else {
        alert("Id Was wrong");
    }

}

