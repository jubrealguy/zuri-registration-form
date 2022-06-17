const firstName = document.querySelector("#fname");
const lastName = document.querySelector('#lname')
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const btn = document.querySelector("#submit");

const error_fname = document.querySelector("#error-fname");
const error_lname = document.querySelector("#error-lname");
const error_email = document.querySelector("#error-email");
const error_pass = document.querySelector("#error-pass");

const invalidFname = document.querySelector(".one");
const invalidLname = document.querySelector(".two");
const invalidEmail = document.querySelector(".three");
const invalidPassword = document.querySelector(".four");


 const formObj = {
    fname: "",
    lname: "",
    email: "",
    password: ""
};


firstName.addEventListener("input", (e) => {
    formObj.fname = e.target.value;
})

lastName.addEventListener("input", (e) => {
    formObj.lname = e.target.value;
})

email.addEventListener("input", (e) => {
    formObj.email = e.target.value;
})

password.addEventListener("input", (e) => {
    formObj.password = e.target.value;
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!formObj.fname) {
        error_fname.textContent = "First Name cannot be empty";
        invalidFname.className = "invalid";
    }

    if (!formObj.lname) {
        error_lname.textContent = "Last Name cannot be empty";
        invalidLname.className = "invalid";
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formObj.email.match(mailformat)) {
        error_email.textContent = "Looks like this is not an email";
        invalidEmail.className = "invalid";
    }

    if (!formObj.password) {
        error_pass.textContent = "password cannot be empty";
        invalidPassword.className = "invalid";
    }

    return true;
})