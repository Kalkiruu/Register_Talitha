        document.getElementById("registerform").addEventListener("submit", function(e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const tanggal = document.getElementById("tanggal").value;
            const handphone = document.getElementById("handphone").value;

            const tableBody = document.getElementById("datalabel").getElementsByTagName("tbody")[0];
            const newRow = tableBody.insertRow();

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = tanggal;
            newRow.insertCell(3).textContent = handphone;

            document.getElementById("registerform").reset();
        })