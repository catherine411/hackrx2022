function chooseAdmin(){
    document.getElementById("dropdownMenuButton1").innerHTML = 'Admin';
}
function choosePatient(){
    document.getElementById("dropdownMenuButton1").innerHTML = 'Patient';
}

//have to finish admin and patient paths
function login(){
    window.open("admin.html");
}

$('p input[type="button"]').click(function () {
    $('#main-table').append('<tr><td><input type="text" class="fname" /></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td></tr>')
});


function appear(){
    document.getElementById("generateTable").style.opacity = 1;
}
