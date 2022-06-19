const btn = document.querySelector("#submit");

const error_fname = document.querySelector("#error-fname");
const error_lname = document.querySelector("#error-lname");
const error_email = document.querySelector("#error-email");
const error_pass = document.querySelector("#error-pass");


const error = document.querySelectorAll(".err")

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

Object.keys(formObj).forEach((dataKey) => {
    document.querySelector(`#${dataKey}`).addEventListener("input", (e) => {
        formObj[dataKey] = e.target.value;
    });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!formObj.fname) {
        error_fname.textContent = "First Name cannot be empty";
        invalidFname.className = "invalid";
        error[0].className = "error"
    }

    if (!formObj.lname) {
        error_lname.textContent = "Last Name cannot be empty";
        invalidLname.className = "invalid";
        error[1].className = "error"
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formObj.email.match(mailformat)) {
        error_email.textContent = "Looks like this is not an email";
        invalidEmail.className = "invalid";
        error[2].className = "error"
    }

    if (!formObj.password) {
        error_pass.textContent = "password cannot be empty";
        invalidPassword.className = "invalid";
        error[3].className = "error"
    }

    return true;
})