// en este ejemplo las variables "callback" son area y volumen 
class Operaciones {
   
    constructor(){
        console.log("CONSTRUCTOR");
    };

    areaCuadrado(lado,area){
        area(lado*lado);
    }

    volumenCubo(lado,volumen){
        volumen(lado*lado*lado);
    }

    volumenCilindro(radio,altura,volumen){
        volumen(3.1416*radio*radio*altura);
    }
    
    
} /* fin de clase */

module.exports = Operaciones
