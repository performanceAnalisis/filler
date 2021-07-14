 console.log("target content2 ran");

var storedLegal = chrome.storage.local.get('newStorage', function (items) {
    console.log(items); 

    //document.getElementById("firstName").value = items.newStorage.src_fname;
    //document.getElementById("lastName").value = items.newStorage.src_lname; 

    if(window.location.href == "https://ailoshop.com/securecheckout"){
    document.querySelector("#checkout_shipping_address_first_name").value = items.newStorage.src_fname;
    document.querySelector("#checkout_email").value = "noemail@gmail.com";
    document.querySelector("#checkout_shipping_address_phone").value = items.newStorage.src_tel;
    document.querySelector("#checkout_shipping_address_address2").value = items.newStorage.src_addr;
    document.querySelector("#checkout_shipping_address_address1").value = items.newStorage.src_cap + " ";


    }

  });