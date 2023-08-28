document.getElementById("add-button").addEventListener("click", addEmailInfo)

function addEmailInfo () {
    const div = document.createElement('div')
    div.innerHTML = '<div class="add-email"> <div class="cancel-button-container"><button id="cancel-button">X</button></div> <label id="first-name" class="first-name-label input-label" for="first-name">First Name:</label> <div class="input-box-container first-name-input"><input id="first-name" class="input-box" type="text" name="first-name" placeholder="First Name"></div> <label id="last-name" class="last-name-label input-label" for="last-name">Last Name:</label> <div class="input-box-container last-name-input"><input id="last-name" class="input-box" type="text" name="last-name" placeholder="Last Name"></div> <label id="email-name" class="email-label input-label" for="email-name">Email:</label> <div class="input-box-container email-input"><input id="email-name" class="input-box" type="text" name="email-name" placeholder="Email"></div> <div class="add-email-button-container"><button id="add-email-button">ADD ME TO THE LIST</button></div> </div>'
    document.getElementById('email-box').appendChild(div);
}