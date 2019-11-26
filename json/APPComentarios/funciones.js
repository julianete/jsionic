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
                sacarErrorG();
            }
        } else { console.log(" En proceso (xmlHttp.readyState) ... " + xmlHttp.readyState); }
    }
    //TO-DO implemetar POST
    xmlHttp.open('GET', uri, true);
    xmlHttp.send(null); //get: NO datos en body
    console.log("llamarSrv() ... sale ...");
}
function sacarErrorG() {
    const RET = document.getElementById("_error");
    const RET_TXT = document.getElementById("_error_txt");
    RET.innerHTML = xmlHttp.status;
    RET_TXT.innerHTML = "Error en la llamada al servicio " + uri;
}
class Usuario {
    constructor(n, l, t) { this.nombre = n; this.pwd = l; this.tkn = t; }
    verUsuario() { console.log(this); console.log("usuario:" + this.numero + "-" + this.pwd + "-" + this.tkn); }
    toString() { return JSON.stringify(this); }
    toToken() { return this.nombre + this.tkn; }
    setToken(valor) { this.tkn = valor; }
}