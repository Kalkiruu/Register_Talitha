document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(loginEmail));

    if (storedUser && storedUser.password == loginPassword) {
        alert("Login Berhasil" + storedUser,nama + "!");
    }else {
        alert("Gk kesimpen rek");
    }
});