document.getElementById("form_registro").addEventListener("submit", function(event){
    event.preventDefault();
    
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("Apellidos").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const edad = document.getElementById("edad").value;
    const correoelectronico = document.getElementById("correoElectronico").value;

    if(edad < 18){
        alert("Debe ser mayor de 18 años para participar del evento");
        return;
    }
    if(nacionalidad!=="Peruano"){
        alert("Solo los peruanos son seran admitidos al evento");
        return;
    }

    const tablebody = document.getElementById("tablebody");
    tablebody.innerHTML=`
        <tr>
            <td>${nombres}</td>
             <td>${apellidos}</td>
            <td>${nacionalidad}</td>
            <td>${edad}</td>
             <td>${correoelectronico}</td>
        </tr>
    `;

    document.getElementById("tablas_datos").style.display="block";
});