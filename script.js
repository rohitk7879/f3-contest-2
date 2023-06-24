const cardDetails = document.getElementById("card-details")

function signup() {
    
    // creating element for signup section 

    let card = document.createElement("div");
    card.className = "details";


    // adding heading for of signup page
    let heading = document.createElement("h2");
    heading.innerText = "SignUp";
    card.appendChild(heading);

    //adding user name inputs
    let username = document.createElement("div");
    username.className = "info";
    card.appendChild(username);

    let Name = document.createElement("label");
    Name.innerText = "Full Name:";
    Name.setAttribute("required", "required")
    username.appendChild(Name);

    let nameInput = document.createElement("input");
    username.appendChild(nameInput);

    //adding user email inputs
    let userEmail = document.createElement("div");
    userEmail.className = "info";
    card.appendChild(userEmail);

    let Email = document.createElement("label");
    Email.innerText = "Email:";
    userEmail.appendChild(Email);

    let emailInput = document.createElement("input");
    userEmail.appendChild(emailInput);

    //addind password inputs

    let userPassword = document.createElement("div");
    userPassword.className = "info";
    card.appendChild(userPassword);

    let Password = document.createElement("label");
    Password.innerText = "Password:";
    userPassword.appendChild(Password);

    let passwordInput = document.createElement("input");
    userPassword.appendChild(passwordInput);

    //adding for confirm password inputs

    let userConPassword = document.createElement("div");
    userConPassword.className = "info";
    card.appendChild(userConPassword);

    let conPassword = document.createElement("label");
    conPassword.innerText = "Confirm Password:";
    userConPassword.appendChild(conPassword);

    let conpassInput = document.createElement("input");
    userConPassword.appendChild(conpassInput);

    let sign = document.createElement("button");
    sign.className = "sign-btn"
    sign.innerText = "Signup";
    card.appendChild(sign);


    cardDetails.appendChild(card);
    document.getElementById("signBtn").disabled = true;

}