const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    //all input data received this variables
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    
    // now write some condition
    if (fname == "" || lname == "" || email == ""
            || pass=="" || cpass == "") {
                swal("Opps...!", "Input field must be fill", "error");
    } else {
        if (!ValidateEmail(email)) {
        
            swal("Opps...!", "Invalid email!", "error");
            
        }
        else if (pass !== cpass) {
            swal("Opps...!", "Password not matching", "error");
        } else {
            swal("Good job!", "registration succcessful!", "success");
            //now store this data in your web browser store
            localStorage.setItem('FirstName', fname);
            localStorage.setItem('LastName', lname);
            localStorage.setItem('Email', email);
            localStorage.setItem('Password', pass);
            localStorage.setItem('Cpassword', cpass);
            
        }
    }

}

function ValidateEmail(mail) 
{   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex))
    {
       return true;
    }

    return false;
}

