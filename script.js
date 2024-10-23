function validarFormulario(){
    let nombre=document.getElementById("nombre").Value;
    let nombre=document.getElementById("email").Value;
    let nombre=document.getElementById("imagen").Value;
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
    
    
