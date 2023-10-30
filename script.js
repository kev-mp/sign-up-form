const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.querySelector('.submit input');
const form = document.getElementById('sign-up-form');
const passwordWrapper = document.querySelector(".input-row:nth-child(3) .input-wrapper:nth-child(1)");
const confirmPasswordWrapper = document.querySelector(".input-row:nth-child(3) .input-wrapper:nth-child(2)");

form.setAttribute("onSubmit", "return checkPassword(this)");


function checkPassword () {
    let var1 = password.value;
    let var2 = confirmPassword.value;
    let warning = document.getElementById('warning');

    if (var1 == var2) {
        console.log("hooray!");

        
        if (warning != null) {
            warning.remove();
            password.style.borderColor = '#E5E7EB';
            confirmPassword.style.borderColor = '#E5E7EB';
        }

        return true;
        
    } else {
        console.log("erm...that just happened");

            if (warning == null) {
                let newWarning = document.createElement('p');
                newWarning.setAttribute("id", "warning");
                newWarning.textContent = "* Passwords do not match";
                newWarning.style.color = 'red';
                passwordWrapper.appendChild(newWarning);

                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
            }        
            
        
        return false;
    }
}


