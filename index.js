// ejemplo de solución utilizando el concepto de "callback"
const Clase = require('./clase');  // utilizacipon de la clase definida en el módulo archivo clase.js
const obj = new Clase();           // se crea un objeto

const n = 32;
obj.areaCuadrado(n,sol => {
    console.log(sol,'metros  cuadrados');
});

obj.volumenCubo(n,sol => {
    console.log(sol,'volumen del cuadrado de',n,'metros de  lado');
});

const r = 5;
const h = 3;
obj.volumenCilindro(r,h,sol => {
    console.log(sol,'volumen del cilindro de radio=',r,'y de altura=',h) ;
});

/*
1. no se acepta dos variables "callback"  
2. la variable "sol" se colocó para completar el formato. En lugar de function(sol) se ha colocado sol =>
3. colocar sol =>  es lo mismo que function(sol)
4. la función "callback" se puede decir que es un función que no tiene nombre
    y que no es necesario colocar un return para devolver el resultado. Por ejemplo,
    en la función areaCuadrado colocar return lado*lado es igual que colocar solo area(lado*lado),
    si se a colocado "area" como nombre del "callback"
5. El nombre de los parámetros pueden ser cualquiera, no necesariamente "req" y "res"
   (de requery y response)    
6. puede haber varios parámetros para operar (a,b,...) pero uno solo el "collback" 
    ("area" en este caso) pero es recomendable utilizar solo una variable de petición (requery)
    que contenga todos los datos requeridos para operar (ya internamente, como  un arreglo o como un objeto)
7. si bien la variable "callback" es una sola, puede contener mucha información, 
   ya sea como arreglo o como un objeto json.
*/