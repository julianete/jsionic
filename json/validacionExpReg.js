const EXPRESION_REGULAR_USUARIO_MAIL = /^\w{6,}$/;
const EXPRESION_REGULAR_EMAIL = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const EXPRESION_REGULAR_ANUNCIO = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const EXPRESION_REGULAR_TELEFONO = /^\+\d{7,15}$/;
const EXPRESION_REGULAR_PWD = /^\w{6,15}$/;


const EXPRESION_REGULAR_ALFABET = /^[a-zA-Z]{1,20}$/
const EXPRESION_REGULAR_NUMERO = /^0{1,5}[1-9]{0,10}$/
const EXPRESION_REGULAR_NUMERO_DECIMAL = /^0{1,5}[1-9]{0,15},[0-9]{1,4}$/
const EXPRESION_REGULAR_HTML = /^<!DOCHTML html>\w*$/

var email = "valerianomoreno@gmail.com"
const NUMERO = "123456";
const NUMERO_DECIMAL = "123456,8";
const ALFABETICO = "123456,8";
//var patron = new RegExp(EXPRESION_REGULAR_EMAIL);
var email_ok = patron.test(email);

class Valida {
    constructor(valor) {
        this.value = valor;
    }
    valor(){ return this.value; }
    numero()            { return EXPRESION_REGULAR_NUMERO_DECIMAL.test(); }
    numeroDecimal()     { return EXPRESION_REGULAR_NUMERO.test(); }
    numeroAlfabetico()  { return EXPRESION_REGULAR_ALFABET.test(); }
}

let numero = new Valida(NUMERO);
let numero_decimal = new Valida(NUMERO_DECIMAL);
let alfabetico = new Valida(ALFABETICO);


console.log(" numero (" + numero.valor() + ") ==> " + numero.numero() );


//let parametro = console.info();

/* for (const envvar in process.env) {
    if (process.env.hasOwnProperty(envvar)) {
        const element = process.env[envvar];
        console.log("process.env["+envvar+"]:"+process.env[envvar]);
    }
} */







/* if (email_ok) {
    console.log("Email correcto");
} else {
    console.log("Email incorrecto");
} */