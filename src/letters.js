const $letter= document.getElementById("letters");



let writing = str => {
    let arrFromStr = str.split('');
    let i=0;
    let printStr = setInterval(function(){
        $letter.innerHTML += arrFromStr[i];
        i++;
        $letter.style.color="blue";
        if(i === arrFromStr.length){
            clearInterval(printStr);
            $letter.innerHTML="";
        }
    },1000);
};


let Textos = new Array();
  // Enter the names of the images below
  Textos[0]="pesos,";
  Textos[1]="bitcoin,";
  Textos[2]="mana,";
  Textos[2]="ether,";
 
let nuevoTexto = -1; // para empezar en el primer texto -1, con 0 comienza por mostrar el segundo
let totalTextos = Textos.length;
 
function repetir() {
  nuevoTexto++;
  if (nuevoTexto == totalTextos) {
    nuevoTexto = 0;
  }
  writing(Textos[nuevoTexto]);
  // cambiar 4 por el valor en segundos
  setTimeout("repetir()",7000);
}
window.onload=repetir;




