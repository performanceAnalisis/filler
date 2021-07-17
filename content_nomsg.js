//var fname = document.getElementById("j_id0:frmApp:frmAppBlock:j_id128:j_id130:0:j_id132:j_id133").value;
//var lname = document.getElementById("j_id0:frmApp:frmAppBlock:j_id128:j_id130:0:j_id132:j_id134").value;

if(window.location.href == "https://lead-ailoshop.ccsystem.net/"){
console.log("Hola estoy funcionando en lado lead");
try{
console.log(document.querySelector("#example > tbody > tr.odd.selected").innerText);
var vectorFila = document.querySelector("#example > tbody > tr.odd.selected").innerText.split("\t");
console.log("Nombre: " + vectorFila[3]);
console.log("Direccion: " + vectorFila[8]);
console.log("CAP: " + vectorFila[10]);
}
catch(err){
console.log(document.querySelector("#example > tbody > tr.even.selected").innerText);
var vectorFila = document.querySelector("#example > tbody > tr.even.selected").innerText.split("\t")
console.log("Nombre: " + vectorFila[3]);
console.log("Direccion: " + vectorFila[8]);
console.log("CAP: " + vectorFila[10]);
}



var order= vectorFila[0];
var publisher= vectorFila[1];
var dataOrder= vectorFila[2];

//var fname= vectorFila[3];
vectorFila[3]= vectorFila[3].replaceAll("+", " ");
//vectorFila[3]= vectorFila[3].replaceAll("%", " ");
vectorFila[3]= vectorFila[3].replaceAll("%C3%BA", " ");
vectorFila[3]= vectorFila[3].replaceAll("%C3%", " ");
vectorFila[3]= vectorFila[3].replaceAll("%2C", " ");
var fname= vectorFila[3].split(' ').slice(0, -1).join(' '); // returns "Paul Steve"
var lname= vectorFila[3].split(' ').slice(-1).join(' '); // returns "Panakkal
var tel= vectorFila[4];
var quantity= vectorFila[5];
var product= vectorFila[6];
var status= vectorFila[7];
//vectorFila[8]= vectorFila[8].replaceAll("%", " ");
vectorFila[8]= vectorFila[8].replaceAll("+", " ");
vectorFila[8]= vectorFila[8].replaceAll("%C3%BA", " ");
vectorFila[8]= vectorFila[8].replaceAll("%C3%", " ");
vectorFila[8]= vectorFila[8].replaceAll("%2C", " ");
var address= vectorFila[8];
var city= vectorFila[9];
var cap= vectorFila[10]; 
var note= vectorFila[11];
var noteAilo= vectorFila[12];
var pedido= vectorFila[13];


}




console.log("source page ran");

var storArray = {
    src_fname: fname,
    src_lname: lname,
    src_tel: tel, 
    src_cap: cap,
    src_addr: address, 
    //src_lname: lname
    };

chrome.storage.local.set({
        'newStorage': storArray
        });