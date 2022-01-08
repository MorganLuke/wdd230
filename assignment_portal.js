let currentDateAndTime = Date()

function dateFunction() {
    var x = new Date(document.lastModified);
    document.getElementById("updated").innerHTML = x;
}