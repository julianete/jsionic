function guardarLocal(clave, valor) { localStorage.setItem(clave, valor); console.log("Clave-saved " + clave + "[" + valor + "] = " + verLocal(clave)); }
function verLocal(clave) { valor = localStorage.getItem(clave); console.log("Clave-recuperado:" + clave + "-" + valor); return valor; }

// llamada GET
function llamarSrv(uri, req, callback) {
    console.log("llamarSrv() ... entra ...");
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                //var cuerpo = JSON.parse(xmlHttp.responseText);
                console.log(" ** OK ** ... " + xmlHttp.status);
                console.log(" Retorno correcto. ... ");
                console.log(xmlHttp.responseText);
                callback(JSON.parse(xmlHttp.responseText));
            } else {
                console.log(" ** Error ** en el servicio ... " + xmlHttp.status);
                sacarError();
            }
        } else { console.log(" En proceso (xmlHttp.readyState) ... " + xmlHttp.readyState); }
    }
    //TO-DO implemetar POST
    xmlHttp.open('GET', uri, true);
    xmlHttp.send(null); //get: NO datos en body
    console.log("llamarSrv() ... sale ...");
}
