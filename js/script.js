function addTeams(){
    var search = document.getElementById("teams").value;
    var div = document.getElementById("box").style.display = "block";
    document.getElementById("teams").value = "";    var div = document.getElementById("box").innerHTML += "<div class='value'>" + "<div class='withoutx' >" + "<p class='textinput'>" + search + "<span class='delete' onclick=deleteForm()>" + "X" + "<span>"+"</div>" + "</p>" + "</div>";

    document.body.appendChild(div);
}

function deleteForm() {
    var div = document.getElementById("box");
    div.removeChild(div.lastChild);
    if (div.childElementCount == 0) {
        document.getElementById("box").style.display = "none";
    }
}
