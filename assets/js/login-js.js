// import { lock2fill } from 'remixicon/icons';
// import { maillfill } from 'remixicon/icons';

//obtencion del elemento del campo de entrada y el boton
document.addEventListener("DOMContentLoaded", () => {
const emailInput=document.getElementById("emailInput");
const passwordInput=document.getElementById("passwordInput")
const loginBtn=document.getElementById("loginbtn");

loginBtn.addEventListener("click",() => {
    const emailValue=emailInput.value;

    if(!isValidEmail(emailValue)){
        emailInput.classList.add("shake");

        setTimeout(() => {
            emailInput.classList.remove("shake");
        }, 1000);
        console.log("Invalid email")
    }else{
        console.log("Valid email")
    }
})

const isValidEmail= (email) => {
    return email.length > 0 && email.includes("@") && email.includes(".");
}

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("token ID : " + String(id_token))
}
});
// Script Google Sign In 
