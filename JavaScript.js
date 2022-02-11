const display = document.querySelector('#resultado');
const teclas = document.querySelectorAll('[class*=tecla]');
const operadores = document.querySelectorAll('#operador');
const resultado = document.getElementById("igual");
const limpar = document.getElementById("limpar");

let numeros = true;
let operador;
let numeroanterior;
let numeronovo;
let a;

for(let i=0;i<11;i++){
    teclas[i].addEventListener('click', clicar);
}

for(let j=0;j<4;j++){
    operadores[j].addEventListener('click', selecionar);
}
resultado.addEventListener('click', igual);
limpar.addEventListener('click', zerar);
function clicar(evento){
    if(numeros==false){
        display.textContent = "";
        numeros=true;
    }
        display.textContent += evento.target.textContent;
   
}
function selecionar(event){
    numeroanterior = display.textContent;
    display.textContent=event.target.textContent;
    numeros = false;
    operador = event.target.textContent;

}
function zerar(){
    display.textContent = "";
}

function igual(){
    if(display.textContent!=""){
    switch(operador){
        case "+":
            numeronovo = display.textContent;
            a = parseFloat(numeroanterior) + parseFloat(numeronovo);
            display.textContent = a;
        break;    
        case "-":
            numeronovo = display.textContent;
            a = parseFloat(numeroanterior) - parseFloat(numeronovo);
            display.textContent = a;
        break; 
        case "/":
            numeronovo = display.textContent;
            a = parseFloat(numeroanterior) / parseFloat(numeronovo);
            display.textContent = a;
        break; 
        case "X":
        case "x":    
            numeronovo = display.textContent;
            a = parseFloat(numeroanterior) * parseFloat(numeronovo);
            display.textContent = a;
        break;  
    }               
    }
}

const mapearteclado = (evento) => {
    const tecla = String(evento.key);
    
   switch(tecla){
   case "0":
   case "1":
   case "2":
   case "3":
   case "4":
   case "5":
   case "6":
   case "7":
   case "8":
   case "9":
   case ".": 
      clicarteclado(tecla);

    break;

   case "+":
   case "-":
   case "x":
   case "/":
    selecionarteclado(tecla);
    break;
   
   case "Enter":
       igual(); 

   break;    
   case "Backspace":
       zerar(); 
   break; 
    };

}

document.addEventListener('keydown', mapearteclado);

function selecionarteclado(event){
    numeroanterior = display.textContent;
    display.textContent=event;
    numeros = false;
    operador = event;
}
function clicarteclado(evento){
    if(numeros==false){
        display.textContent = "";
        numeros=true;
    }
    display.textContent = display.textContent + evento;;
  
}
