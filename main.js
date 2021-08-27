
let edad = prompt("ESCRIBE TU EDAD:");
if ((edad != "") && ((edad >= 18) && (edad <= 40))) {
    let entradaPlaneta = prompt("INGRESAR PLANETA FAVORITO");
    let entradaAdjetivo = prompt("INGRESAR ADJETIVO");
    let entradaSustantivo = prompt("INGRESAR UN SUSTANTIVO EN INGLES");
    let nombreDrag = (entradaPlaneta + " " + entradaAdjetivo + " " + "the " + entradaSustantivo);
    alert(nombreDrag);
} else if ((edad != "") && (edad >= 41)) {
    alert("Nunca es demasiado tarde para ser quien quieres ser. Continúa!");
    let entradaPlaneta = prompt("INGRESAR PLANETA FAVORITO");
    let entradaAdjetivo = prompt("INGRESAR ADJETIVO");
    let entradaSustantivo = prompt("INGRESAR UN SUSTANTIVO EN INGLES");
    let nombreDrag = (entradaPlaneta + " " + entradaAdjetivo + " " + "the " + entradaSustantivo);
    alert(nombreDrag);
} else {
    alert("Debes ser mayor de edad para continuar");
}

