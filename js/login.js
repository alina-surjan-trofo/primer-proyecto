
function ingreso () {
    
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login !="login" || password !="login"){
        localStorage.setItem("login", JSON.stringify(login));
        localStorage.setItem("password", JSON.stringify(password));
        location.href = "index.html";
    }
    else {
        alert("Para ingresar debe registrarse");
    }
}
document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById("registrarse").addEventListener("click", () => {
        ingreso();
    } )

})