//Pego los datos de los leads en el sitio que corresponde


 console.log("target content2 ran");

var storedLegal = chrome.storage.local.get('newStorage', function (items) {
    console.log(items); 

    //document.getElementById("firstName").value = items.newStorage.src_fname;
    //document.getElementById("lastName").value = items.newStorage.src_lname; 

    if(window.location.href == "https://ailoshop.com/securecheckout"){
    document.querySelector("#checkout_shipping_address_first_name").value = items.newStorage.src_fname;
    document.querySelector("#checkout_shipping_address_last_name").value = items.newStorage.src_lname;
    document.querySelector("#checkout_email").value = "noemail@gmail.com";
    //document.querySelector("#checkout_email").value = "/f"; //prueba textbalze
    document.querySelector("#checkout_shipping_address_phone").value = items.newStorage.src_tel;
    document.querySelector("#checkout_shipping_address_address2").value = items.newStorage.src_addr;
    document.querySelector("#checkout_shipping_address_address1").value = items.newStorage.src_cap + " ";
    }


/* Por ahora no funciona bien. Solitos problemas de no encontrar elementos. A veces hay que clickar dos veces
para que llame
    if(window.location.href == "https://manager.masvoz.es/"){
    document.addEventListener('DOMContentLoaded', function () {
    console.log("hola desde masvoz");
    document.querySelector("#webphone-row > div.controles_.ONLINE > div.inline.agent-call-buttons > div.inline.btn-wp.colgar-btn-wp").click();
    //document.querySelector("#webphone-row > div.controles_.ONLINE > div:nth-child(3) > input").value = items.newStorage.src_tel;
    setTimeout(function(){ document.querySelector("#webphone-row > div.controles_.ONLINE > div:nth-child(3) > input").value = items.newStorage.src_tel;  ; }, 3000);

    setTimeout(function(){ document.querySelector("#webphone-row > div.controles_.ONLINE > div.inline.agent-call-buttons > div.inline.btn-wp.llamar-btn-wp").click() ; }, 500);
    }); 
    }
*/

   if(window.location.href == "https://manager.masvoz.es/"){
   console.log("hola desde masvoz");
   document.querySelector("#webphone-row > div.controles_.ONLINE > div.inline.agent-call-buttons > div.inline.btn-wp.colgar-btn-wp").click();
   setTimeout(function(){ document.querySelector("#webphone-row > div.controles_.ONLINE > div:nth-child(3) > input").value = items.newStorage.src_tel;  }, 3000);
   setTimeout(function(){ document.querySelector("#webphone-row > div.controles_.ONLINE > div.inline.agent-call-buttons > div.inline.btn-wp.llamar-btn-wp").click() ; }, 500);


   }











  });