document.getElementById("add-button").addEventListener("click", openEmailInfoBox)
var emailBox = document.getElementById("add-email")

function openEmailInfoBox () {
    if (!emailBox.classList.contains("add-email")) {
        emailBox.classList.add("add-email")
        emailBox.innerHTML += '<div class="cancel-button-container"><button id="cancel-button">X</button></div>'
        emailBox.innerHTML += '<label id="first-name" class="first-name-label input-label" for="first-name">First Name:</label>'
        emailBox.innerHTML += '<div class="input-box-container first-name-input"><input id="first-name" class="input-box" type="text" name="first-name" placeholder="First Name"></div>'
        emailBox.innerHTML += '<label id="last-name" class="last-name-label input-label" for="last-name">Last Name:</label>'
        emailBox.innerHTML += '<div class="input-box-container last-name-input"><input id="last-name" class="input-box" type="text" name="last-name" placeholder="Last Name"></div>'
        emailBox.innerHTML += '<label id="email-name" class="email-label input-label" for="email-name">Email:</label>'
        emailBox.innerHTML += '<div class="input-box-container email-input"><input id="email-name" class="input-box" type="text" name="email-name" placeholder="Email"></div>'
        emailBox.innerHTML += '<div class="add-email-button-container"><button id="add-email-button">ADD ME TO THE LIST</button></div>'
        document.getElementById("cancel-button").addEventListener("click", closeEmailInfoBox)
        document.getElementById("add-email-button").addEventListener("click", addEmail())
    }
}

function closeEmailInfoBox () {
    emailBox.innerHTML = ""
    emailBox.classList.remove("add-email")
}

function addEmail () {
    //check if email is legit (if not then alert)
    //add to database
}