
function preguntas(planeta, adjetivo, sustantivo) {
    planeta = prompt("INGRESAR PLANETA FAVORITO");
    adjetivo = prompt("INGRESAR ADJETIVO");
    sustantivo = prompt("INGRESAR UN SUSTANTIVO EN INGLES");
    let nombreDrag = (planeta + " " + adjetivo + " " + "the " + sustantivo);
        alert(nombreDrag);
}
class DragNameRandom {
    constructor (nombres,apellidos){
        this.nombres = ["Lady", "Duchess", "Misty", "Pussy","Butter", "Precious","Chastity", "Toxic","Fever","Miss", "Magic"];
        this.apellidos = ["Hole", "Longbottom", "Cox", "Hooker", "Everhard", "Teetees","Eleganza", "Royale", "Glitter", "Inferno", "Diamond"];
        }
    generadorNombreRandom (){
        let nombreRandom = this.nombres[Math.floor(Math.random()*(this.nombres.lenght))];
    }
    generadorApellidoRandom(){    
        let apellidoRandom = this.apellidos[Math.floor(Math.random()*(this.apellidos.lenght))];
    }
}


//GENERADOR NOMBRE DRAG CON INGRESOS DE USUARIO
let continuar = true;
do {
    let edad = parseInt(prompt("ESCRIBE TU EDAD:"));

    if ((edad != "") && ((edad >= 18) && (edad <= 40))) {
        preguntas ();
        
    } else if ((edad != "") && (edad >= 41)) {
        alert("Nunca es demasiado tarde para ser quien quieres ser. Continúa!");
        preguntas ();
    } else {
        alert("Debes ser mayor de edad para continuar");
        break
    }

    //GENERADOR NOMBRE DRAG RANDOM (SUMANDO ARRAY - CLASE)
    
    alert("TAMBIEN PUEDES DEJARLO AL AZAR...");
    //let apellidoUsuario = prompt("AHORA INGRESA UN NUMERO DEL 0 AL 10 PARA EL APELLIDO:");

    /*    if ((nombreUsuario !=" " && nombreUsuario >= 0 && nombreUsuario <= 10) && (apellidoUsuario !=" " && apellidoUsuario >= 0 && apellidoUsuario <= 10)) {
            DragNameRandom.generadorRandom();
        }else{"INGRESE UN NUMERO VALIDO"}
    */ 
    //ARRAY + CLASE
        let dragName = new DragNameRandom();
        let nombreFinal= dragName.generadorNombreRandom();
        let apellidoFinal = dragName.generadorApellidoRandom();
        alert(("TU NOMBRE DRAG ES ").concat(nombreFinal, " ", apellidoFinal));
        
    //LOOP
    
    opcionValida = false;
    let fin = "";

    while (!opcionValida) {
        fin = prompt("¿Desea finalizar el programa?\n 1- si\n 2- no").toLowerCase();
        if ((fin != "1") && (fin != "2")) {
            alert("Opción invalida, por favor vuelva a intentar");
        }else {
            opcionValida = true;
        } 
    } if (fin === "1" || fin === "si") {
        continuar = false;
    }
} while (continuar);

