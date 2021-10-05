function traerInformacion1(){
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            darRespuesta1(respuesta.items);
        }

    });
}

function darRespuesta1(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].specialty+"</td>";
        myTable+="<td>"+items[i].graduate_year+"</td>";
        myTable+="<td>"+items[i].department_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento1("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);

}
function guardarInformacion1(){
    let myData={
        id:$("#idDoctor").val(),
        specialty:$("#specialtyDoctor").val(),
        graduate_year:$("#graduate_yearDoctor").val(),
        department_id:$("#department_id").val(),
        name:$("#nameDoctor").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#idDoctor").val("");
            $("#specialtyDoctor").val("");
            $("#graduate_yearDoctor").val("");
            $("#department_id").val("");
            $("#nameDoctor").val("");
            traerInformacion1();
            alert("Se Ha Guardado El Dato")
        }
    });
}


function editarInformacion1(){
    let myData={
        id:$("#idDoctor").val(),
        specialty:$("#specialtyDoctor").val(),
        graduate_year:$("#graduate_yearDoctor").val(),
        department_id:$("#department_id").val(),
        name:$("#nameDoctor").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#idDoctor").val("");
            $("#specialtyDoctor").val("");
            $("#graduate_yearDoctor").val("");
            $("#department_id").val("");
            $("#nameDoctor").val("");
            traerInformacion1();
            alert("Se Ha Actualizado")
        }
    });
}

function borrarElemento1(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            traerInformacion1();
            alert("Se Ha Eliminado.")
        }
    });
}


//--------------------------------------------------------------------------------------------------------------------


function traerInformacion(){
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            darRespuesta(respuesta.items);
        }

    });
}

function darRespuesta(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
            traerInformacion();
            alert("Se Ha Guardado El Dato")
        }
    });
}


function editarInformacion(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
            traerInformacion();
            alert("Se Ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se Ha Eliminado.")
        }
    });
}


//------------------------------------------------------------------------------------------------------------------------------


function traerInformacion2(){
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            darRespuesta2(respuesta.items);
        }

    });
}

function darRespuesta2(items){

    let myTable2="<table>";
    for(i=0;i<items.length;i++){
        myTable2+="<tr>";
        myTable2+="<td>"+items[i].id+"</td>";
        myTable2+="<td>"+items[i].messagetext+"</td>";
        myTable2+="<td> <button onclick='borrarElemento2("+items[i].id+")'>Borrar</button>";
        myTable2+="</tr>";
    }
    myTable2+="</table>";
    $("#resultado2").append(myTable2);

}
function guardarInformacion2(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messageText").val(),
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacion2();
            alert("Se Ha Guardado El Dato")
        }
    });
}


function editarInformacion2(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#MessageText").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacion2();
            alert("Se Ha Actualizado")
        }
    });
}

function borrarElemento2(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7167dae82b08f9-basedmedicos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            traerInformacion2();
            alert("Se Ha Eliminado.")
        }
    });
}