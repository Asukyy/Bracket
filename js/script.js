document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var values = [];
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        values.push(inputs[i].value);
    }
    console.log(values);
});
