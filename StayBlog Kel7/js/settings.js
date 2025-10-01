const changeWindow = document.getElementById("changeuser");
const changeWindow2 = document.getElementById("changepass")
const getin = document.getElementById("setting");
const getin2 = document.getElementById("setting2");
const getout = document.getElementById("close");
const getout2 = document.getElementById("close2");
const messageDisplay = document.getElementById("notifMessage");
const messageDisplay2 = document.getElementById("notifMessage2");

getin.addEventListener("click", () => {
  changeWindow.classList.add("active");
});
getout.addEventListener("click", () => {
  changeWindow.classList.remove("active");
});

getin2.addEventListener("click", () => {
  changeWindow2.classList.add("active");
});
getout2.addEventListener("click", () => {
  changeWindow2.classList.remove("active");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    changeWindow.classList.remove("active");
  }
});

// -----------------------------------------------------------------------------CHANGE USERNAME ---------------------------------------------- //
document.getElementById("changename").addEventListener("submit", function(e) {
    e.preventDefault();

    const newName = document.getElementById("grabNewName").value;
    const currentPassword = document.getElementById("grabPassword").value;

    const currentUserJSON = localStorage.getItem("currentUser");
    
    if (!currentUserJSON) {
      messageDisplay.textContent = "Error: User not logged in.";
      messageDisplay.style.color = "red";
      return;
    }

    let currentUser = JSON.parse(currentUserJSON);
    
    if (currentUser.password === currentPassword) {
      if (!newName.trim()) {
            messageDisplay.textContent = "New username cannot be empty.";
            return;
        }
    const oldEmailKey = currentUser.email;
    currentUser.nama = newName.trim();

    localStorage.setItem(oldEmailKey, JSON.stringify(currentUser));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    messageDisplay.textContent = "Username successfully changed!";
    messageDisplay.style.color = "green";
    this.reset();
    }
    else {
        messageDisplay.textContent = "Invalid email/password";
        messageDisplay.style.color = "red";
    }
})

//-----------------------------------------------------------------------------------CHANGE PASSWORD ---------------------------------//
document.getElementById("changepassword").addEventListener("submit", function(e) {
    e.preventDefault();

    const newPass = document.getElementById("grabNewPassword").value;
    const currentPassword = document.getElementById("grabPassword2").value;

    const currentUserJSON = localStorage.getItem("currentUser");
    
    if (!currentUserJSON) {
      messageDisplay2.textContent = "Error: User not logged in.";
      messageDisplay2.style.color = "red";
      return;
    }

    let currentUser = JSON.parse(currentUserJSON);
    
    if (currentUser.password === currentPassword) {
      if (!newPass.trim()) {
            messageDisplay2.textContent = "New password cannot be empty.";
            return;
        }
        const oldEmailKey = currentUser.email;
        currentUser.password = newPass.trim();

        localStorage.setItem(oldEmailKey, JSON.stringify(currentUser));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        messageDisplay2.textContent = "Password successfully changed!";
        messageDisplay2.style.color = "green";
        this.reset();
      }
      else {
          messageDisplay2.textContent = "Invalid password";
          messageDisplay2.style.color = "red";
        } 
    })