document.getElementById("registerForm").addEventListener("submit", function(e) {
            e.preventDefault();

            //Ambil nilai input
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const tanggal = document.getElementById("tanggal").value;
            
            //LocalStorage
            const user = {
                nama: nama,
                email: email,
                password: password,
                tanggal: tanggal,
            };
            localStorage.setItem(email, JSON.stringify(user));

            const msg = document.getElementById("regMessage");
            msg.textContent = "Account created!";
            msg.style.color = "green";

            document.getElementById("registerForm").reset();
            })

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(loginEmail));

    if (storedUser && storedUser.password == loginPassword) {
        localStorage.setItem("currentUser", JSON.stringify(storedUser));
        window.location.href = "dashboard.html";

    }else {
        const msg = document.getElementById("logMessage");
        msg.textContent = "Invalid email/password";
        msg.style.color = "red";
    }
});