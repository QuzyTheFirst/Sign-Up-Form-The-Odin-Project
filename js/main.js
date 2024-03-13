const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");
const confirmPasswordOutput = document.querySelector("#confirm-password-output")

confirmPasswordField.addEventListener('input', ()=>{
    if(passwordField.value === confirmPasswordField.value){
        confirmPasswordOutput.textContent = "";
    }
    else{
        confirmPasswordOutput.textContent = "* Passwords do not match";
    }
})