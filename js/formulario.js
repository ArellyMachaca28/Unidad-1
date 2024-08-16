function datos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var fechadenacimiento = document.getElementById("nacimiento").value;
    var femenimo = document.getElementById("femenino").checked;
    var masculino = document.getElementById("masculino").checked;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var Sípracticodeporte= document.getElementById("sí").checked;
    var Nopracticodeporte= document.getElementById("no").checked;


    var mensaje= "Nombres: "+nombres
    + "\nApellidos: " + apellidos
    + "\nFecha de nacimientos: " + fechadenacimiento
    + "\nEs mujer: " + femenino
    + "\nEs hombre: " + masculino
    + "\nCorreo electrónico: " + email
    + "\nNúmero: " + phone
    + "\nPeso: " + peso
    + "\nPractica deporte: " + Sípracticodeporte
    + "\nNo practica deporte: " + Nopracticodeporte;

    
    console.log(nombres, apellidos, fechadenacimiento, femenimo, masculino, email, phone, peso, altura, sípracticodeporte, Nopracticodeporte, );
}