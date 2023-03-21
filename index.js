//document.getElementById("boton").addEventListener("click", abrirNuevaVentana);

//function abrirNuevaVentana()
 //{
  //window.open("/Users/cristianalvarez/Downloads/Argentina Programa 2022/Desarrollo Frontend Enero 2023/ProyectoCVAlvarezCristian/proyecto/index3.html");
// }//

 function login (){
    let apellido= document.getElementById("apellido").value;
    let nombre= document.getElementById("nombre").value;
    let documento=document.getElementById("documento").value;

    if (apellido.length >5)
    {
        if(nombre.length >5)
        {
            
            if (documento.length >7)
            {
                window.location="index3.html";
            }
            else {
                alert("ingrese un documento mayor a 7 caracteres")
            }
        }
        else {
            alert("ingrese nombre mas largo")
        }
    }
    else {
        alert("ingrese apellido mas largo y sin numeros")
    }
}
