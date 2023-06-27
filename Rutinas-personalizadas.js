function Rutinaspersonalizadas(){
    document.getElementById("Datos").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("sexo").value;
        var username = document.getElementById("edad").value;
        var username = document.getElementById("peso").value;
        var username = document.getElementById("altura").value;
        var username = document.getElementById("objetivo").value;
    });
}