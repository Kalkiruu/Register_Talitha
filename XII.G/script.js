document.getElementById("registerForm").addEventListener("submit", function(e) {
            e.preventDefault();

            //Ambil nilai input
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const tanggal = document.getElementById("tanggal").value;
            const handphone = document.getElementById("handphone").value;
            
            //LocalStorage
            const user = {
                nama: nama,
                email: email,
                password: password,
                tanggal: tanggal,
                handphone: handphone,
            };
            localStorage.setItem(email, JSON.stringify(user));

            alert("ambalabom");
                
            const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            const newRow = tableBody.insertRow();

            newRow.insertCell(0).textContent = nama;   
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = password;
            newRow.insertCell(3).textContent = tanggal;
            newRow.insertCell(4).textContent = handphone;

            document.getElementById("registerForm").reset();
            })