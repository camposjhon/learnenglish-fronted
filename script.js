function ingresar() {

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if (usuario !== "" && password !== "") {

        document.getElementById("login").classList.add("oculto");
        document.getElementById("home").classList.remove("oculto");

    } else {

        alert("Por favor ingresa usuario y contraseña");

    }

}


function mostrarLessons() {

    document.getElementById("home").classList.add("oculto");
    document.getElementById("lessons").classList.remove("oculto");

}


function volverHome() {

    document.getElementById("lessons").classList.add("oculto");
    document.getElementById("home").classList.remove("oculto");

}