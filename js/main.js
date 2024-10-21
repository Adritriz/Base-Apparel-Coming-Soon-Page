const form = document.querySelector(".form");
const email = document.querySelector(".form__input");
const submitBtn = document.querySelector(".form__submitBtn");

email.addEventListener("input", (event) => {
    if(email) {
        email.
    }
})






submitBtn.addEventListener("click", (event) => {
    if (email === '' || email === undefined) {
        
    }
})




function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g;
    return regex.test(email);
}

if (validateEmail(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
};








/* 
if (userInput) {
} */
