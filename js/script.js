function addTeams(){
    var search = document.getElementById("teams").value;
    var div = document.getElementById("box").innerHTML += "<div class='btn2'>"+ search + "</div>" ;
    document.getElementById("teams").value = "";
    document.body.appendChild(div);

}