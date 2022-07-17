let role;
function chooseAdmin(){
    document.getElementById("dropdownMenuButton1").innerHTML = 'Admin';
    role = "admin"
}
function choosePatient(){
    document.getElementById("dropdownMenuButton1").innerHTML = 'Patient';
    role="patient"
}

//have to finish admin and patient paths
function login(){
    // const loginRole = document.getElementById("role").innerText;
    if (role=="admin")
        window.open("admin.html")
    else if (role="patient")
        window.open("patient.html")
}

$('p input[type="button"]').click(function () {
    $('#main-table').append('<tr><td><input type="text" class="fname" /></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td></tr>')
});


function appear(){
    document.getElementById("generateTable").style.opacity = 1;
}
