function validarFormulario(){
    let nombre=document.getElementById("nombre").Value;
    let email=document.getElementById("email").Value;
    let imagen=document.getElementById("imagen").Value;
    if(nombre=="" || email=="" || imagen=="" ){

        alert("Todos los campos son obligatorios...");
        return false;
    }
    return true;
}
function mostrarImagen(event){
    let imagen=document.getElementById("ver-imagen");
    imagen.src=URL.createObjectURL(event.target.files[0]);
}
    
    
