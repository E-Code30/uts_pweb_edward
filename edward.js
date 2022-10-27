let Ndepan = document.getElementById("namaD");
let Nbelakang = document.getElementById("namaB");
let alamat = document.getElementById("alamat");
let username = document.getElementById("username");
let password = document.getElementById("password");
let submit = document.getElementById("submit").addEventListener('click', function(){
    if (Ndepan.value == '' && Nbelakang.value == '' && alamat.value == '' && username.value == '' && password.value == ''){
        swal("Opps", "Data Tidak Boleh Kosong", "error")
    }
    else if (Ndepan.value == ''){
        swal("Opps", "Nama Depan Tidak Boleh Kosong", "error")
    }
    else if (Nbelakang.value == ''){
        swal("Opps", "Nama Belakang Tidak Boleh Kosong", "error")
    }
    else if (alamat.value == ''){
        swal("Opps", "Alamat Tidak Boleh Kosong", "error")
    }
    else if (username.value == ''){
        swal("Opps", "Username Tidak Boleh Kosong", "error")
    }
    else if (password.value == ''){
        swal("Opps", "Password Tidak Boleh Kosong", "error")
    }
        
    else {
        swal("Save", "Data Tersimpan", "success").then(function() {
            window.location.href = 'index.html';
        });
    }
})

